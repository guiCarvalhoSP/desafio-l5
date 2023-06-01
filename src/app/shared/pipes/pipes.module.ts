import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeasonPipe } from './season.pipe';
import { StatusTranslatePipe } from './status-translate.pipe';



@NgModule({
  declarations: [SeasonPipe, StatusTranslatePipe],
  imports: [
    CommonModule
  ], 
  exports: [SeasonPipe, StatusTranslatePipe]
})
export class PipesModule { }
