import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
  ],
})
export class MaterialModule {}
