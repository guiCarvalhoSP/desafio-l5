import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IEpisode } from 'src/app/shared/interfaces/IEpisodes';
import { take, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

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
    this.apiService
      .getAllEpisodeList()
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe({
        next: (value) => {
          this.episodesList = [...value.results];
          this.nextEpisodeUrl = value.info.next;
        },
      });
  }
}
