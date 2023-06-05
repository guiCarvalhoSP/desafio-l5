import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  user!: any;

  constructor(loginService: LoginService) {
    let token = localStorage.getItem('token');
    if (token) {
      this.user = loginService.obtainUserData(token);
    }
  }
}
