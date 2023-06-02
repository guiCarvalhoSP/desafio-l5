import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '../shared/material/material.module';
import { CharactersComponent } from './home/characters/characters.component';
import { EpisodesComponent } from './home/episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent, EpisodesComponent, CharactersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class PagesModule {}
