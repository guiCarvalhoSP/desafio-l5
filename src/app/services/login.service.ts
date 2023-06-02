import { Injectable, EventEmitter } from '@angular/core';
import { mockUsers as mock } from '../mocks/usersMocks';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // This service is a mock, and needs to be changed in the future to work correctly.
  private mockUsers = mock;
  isLogged = new EventEmitter<boolean>();

  constructor(private _snackbar: SnackbarService, private router: Router) {}

  login(email: string, password: string) {
    console.log(email);
    let user = this.mockUsers.find((user) => user.email === email);
    console.log(user)
    if (user && user.password == password) {
      localStorage.setItem('token', user.token);
      this.router.navigate(['home']);
      this.isLogged.emit(true);
    } else {
      this._snackbar.openSnackBar(
        'Email e/ou senha informados incorretos! Tente novamente.'
      );
      this.isLogged.emit(false);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.isLogged.emit(false);
  }
}
