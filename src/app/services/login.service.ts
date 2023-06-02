import { Injectable } from '@angular/core';
import { mockUsers as mock } from '../mocks/usersMocks';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // This service is a mock, and needs to be changed in the future to work correctly.
  mockUsers = mock;

  constructor(private _snackbar: SnackbarService, private router: Router) {}

  login(email: string, password: string) {
    let user = this.mockUsers.find((user) => user.email == email);

    if (user && user.password == password) {
      localStorage.setItem('token', user.token);
      this.router.navigate(['home']);
    } else {
      this._snackbar.openSnackBar(
        'Email ou senhas passados incorretos! Tente novamente'
      );
    }
  }

  isLogged() {
    let token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
