import { Component, Input } from '@angular/core';
import { IEpisode } from 'src/app/shared/interfaces/IEpisodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  @Input()
  episodes!: IEpisode[];
}
