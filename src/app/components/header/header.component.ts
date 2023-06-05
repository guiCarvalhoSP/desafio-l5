import { Component } from '@angular/core';

import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean = false;
  user: any = {};
  token: string | null = '';

  constructor(private loginService: LoginService) {
    this.isLogged = this.loginService.userIsLogged();
    this.token = localStorage.getItem('token');
    this.user = this.loginService.obtainUserData(this.token);
  }

  ngOnInit() {
    this.loginService.isLogged.subscribe((value) => {
      this.isLogged = value;
    });
  }

  logout() {
    this.loginService.logout();
    this.user = {};
  }
}
