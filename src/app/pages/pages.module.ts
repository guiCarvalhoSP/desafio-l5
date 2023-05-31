import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './home/episodes/episodes.component';
import { MaterialModule } from '../shared/material/material.module';
import { SeasonPipe } from '../shared/season.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [HomeComponent, EpisodesComponent, SeasonPipe],
  imports: [CommonModule, MaterialModule, InfiniteScrollModule],
})
export class PagesModule {}
