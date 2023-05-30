import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './home/episodes/episodes.component';



@NgModule({
  declarations: [
    HomeComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
