import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IEpisode, IEpisodes } from 'src/app/shared/interfaces/IEpisodes';
import { take, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
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
      this.useEpisodeResponse(
        this.apiService.getResponseFromAUrl(this.nextEpisodeUrl)
      );
    } else if(!this.searchForm.get('search')?.value && this.episodesList.length == 0) {
      this.isLoading = true;
      this.useEpisodeResponse(this.apiService.getAllEpisodeList());
    } 
  }

  renderFilteredList() {
    let queryParam: string = this.searchForm.get('search')?.value;
    this.isLoading = true;
    console.log(this.listRendered);
    if(this.listRendered == ListNames.episodes) {
      this.episodesList = [];
      this.useEpisodeResponse(this.apiService.getFilteredEpisodeList(queryParam));
    }
    else if(this.listRendered == ListNames.characters) {

    }
  }

  changeRenderList(event: number) {
    console.log(event);
    switch(event) {
      case 0:
        console.log('case 0');
        this.listRendered = ListNames.episodes;
        if(this.searchForm.get('search')?.value) this.renderFilteredList();
        break;
      case 1: 
        console.log('case 1');
        this.listRendered = ListNames.characters;
        break;
      default: 
        console.log('default')
        this.openErrorSnackBar();
    }
  }

  openErrorSnackBar() {
    this._snackBar.open('Aconteceu algum erro! Tente novamente mais tarde', undefined, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 4000
    });
  }

  private useEpisodeResponse(observable: Observable<any>) {
    this.notFound = false;
    observable
      .pipe(
        take(1),
        catchError((error: HttpErrorResponse) => {
          console.error(error.error?.error);
          if(error.status == 404) this.notFound = true;
           else this.openErrorSnackBar();
          this.isLoading = false;
          return EMPTY;
        })
      )
      .subscribe({
        next: (value) => {
          this.episodesList = [...this.episodesList, ...value.results];
          this.nextEpisodeUrl = value.info.next;
        },
        complete: () => (this.isLoading = false),
      });
  }
}
