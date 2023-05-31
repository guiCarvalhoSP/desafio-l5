import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, BrowserAnimationsModule],
  exports: [MatCardModule, MatProgressSpinnerModule, BrowserAnimationsModule],
})
export class MaterialModule {}
