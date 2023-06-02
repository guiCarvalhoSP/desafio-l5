import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeasonPipe } from './season.pipe';
import { StatusTranslatePipe } from './status-translate.pipe';
import { UnknowPipe } from './unknow.pipe';

@NgModule({
  declarations: [SeasonPipe, StatusTranslatePipe, UnknowPipe],
  imports: [
    CommonModule
  ], 
  exports: [SeasonPipe, StatusTranslatePipe, UnknowPipe]
})
export class PipesModule { }
