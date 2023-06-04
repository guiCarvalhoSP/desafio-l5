import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg: string, action?: string) {
    this._snackBar.open(msg, action, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 4000,
    });
  }
}
