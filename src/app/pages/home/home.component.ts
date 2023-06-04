import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { ICharacter, ICharacters } from 'src/app/shared/interfaces/ICharacter';
import { IEpisode, IEpisodes } from 'src/app/shared/interfaces/IEpisodes';
import { ApiService } from 'src/app/shared/services/api.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

enum ListNames {
  episodes = 'episodes',
  characters = 'characters',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchForm: FormGroup;
  isLoading: boolean = false;
  notFound: boolean = false;

  listRendered: string = ListNames.episodes;

  episodesList: IEpisode[] = [];
  nextEpisodeUrl?: string | null;

  charactersList: ICharacter[] = [];
  nextCharactersUrl?: string | null;

  constructor(
    private apiService: ApiService,
    private snackbarService: SnackbarService,
    formBuilder: FormBuilder
  ) {
    this.searchForm = formBuilder.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.renderEpisodesList();
  }

  renderEpisodesList() {
    if (this.nextEpisodeUrl) {
      this.isLoading = true;
      this.useEpisodeResponse(this.apiService.getResponseFromAUrl(this.nextEpisodeUrl));
    } else if (!this.searchForm.get('search')?.value && this.episodesList.length == 0) {
      this.isLoading = true;
      this.useEpisodeResponse(this.apiService.getAllEpisodeList());
    }
  }

  renderCharactersList() {
    if (this.nextCharactersUrl) {
      this.isLoading = true;
      this.useCharacterResponse(this.apiService.getResponseFromAUrl(this.nextCharactersUrl));
    } else if (!this.searchForm.get('search')?.value && this.charactersList.length == 0) {
      this.isLoading = true;
      this.useCharacterResponse(this.apiService.getAllCharacterList());
    }
  }

  renderFilteredList() {
    let queryParam: string = this.searchForm.get('search')?.value;
    this.isLoading = true;
    if (this.listRendered == ListNames.episodes) {
      this.episodesList = [];
      this.useEpisodeResponse(this.apiService.getFilteredEpisodeList(queryParam));
    } else if (this.listRendered == ListNames.characters) {
      this.charactersList = [];
      this.useCharacterResponse(this.apiService.getFilteredCharacterList(queryParam));
    }
  }

  changeRenderList(event: number) {
    switch (event) {
      case 0:
        this.listRendered = ListNames.episodes;
        if (this.searchForm.get('search')?.value) this.renderFilteredList();
        break;
      case 1:
        this.listRendered = ListNames.characters;
        if (this.searchForm.get('search')?.value) this.renderFilteredList();
          else if(this.charactersList.length == 0) this.renderCharactersList();
        break;
      default:
        this.openErrorSnackBar();
    }
  }

  openErrorSnackBar() {
    this.snackbarService.openSnackBar('Aconteceu algum erro! Tente novamente mais tarde');
  }

  private useEpisodeResponse(observable: Observable<IEpisodes>) {
    this.notFound = false;
    this.pipeFunctions(observable)
      .subscribe({
        next: (value) => {
          this.episodesList = [...this.episodesList, ...value.results];
          this.nextEpisodeUrl = value.info.next;
        },
        complete: () => (this.isLoading = false),
      });
  }

  private useCharacterResponse(observable: Observable<ICharacters>) {
    this.notFound = false;
    this.pipeFunctions(observable)
      .subscribe({
        next: (value) => {
          this.charactersList = [...this.charactersList, ...value.results];
          this.nextCharactersUrl = value.info.next;
        },
        complete: () => (this.isLoading = false),
      });
  }

  private pipeFunctions(observable:Observable<any>) {
    return observable.pipe(
      take(1),
      catchError((error: HttpErrorResponse) => {
        console.error(error.error?.error);
        if (error.status == 404) this.notFound = true;
        else this.openErrorSnackBar();
        this.isLoading = false;
        return EMPTY;
      })
    )
  }
}
