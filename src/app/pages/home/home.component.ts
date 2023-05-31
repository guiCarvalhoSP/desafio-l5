import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IEpisode, IEpisodes } from 'src/app/shared/interfaces/IEpisodes';
import { take, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchForm: FormGroup;
  isLoading: boolean = false;

  episodesList: IEpisode[] = [];
  nextEpisodeUrl?: string | null;

  constructor(
    private apiService: ApiService,
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

  renderFilteredEpisodes() {
    
    let queryParam: string = this.searchForm.get('search')?.value;
    // console.log(queryParam);
    this.isLoading = true;
    this.episodesList = [];
    this.useEpisodeResponse(this.apiService.getFilteredEpisodeList(queryParam));
  }

  private useEpisodeResponse(observable: Observable<any>) {
    observable
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
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
