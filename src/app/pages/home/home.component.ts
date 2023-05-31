import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IEpisode, IEpisodes } from 'src/app/shared/interfaces/IEpisodes';
import { take, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  episodesList: IEpisode[] = [];
  nextEpisodeUrl?: string | null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.renderEpisodesList();
  }

  renderEpisodesList() {
    this.useEpisodeResponse(this.apiService.getAllEpisodeList());
  }

  loadNextEpisodePage() {
    if (this.nextEpisodeUrl) {
      this.useEpisodeResponse(
        this.apiService.getResponseFromAUrl(this.nextEpisodeUrl)
      );
    }
  }

  private useEpisodeResponse(observable: Observable<any>) {
    observable
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe({
        next: (value) => {
          this.episodesList = [...this.episodesList, ...value.results];
          this.nextEpisodeUrl = value.info.next;
        },
      });
  }
}
