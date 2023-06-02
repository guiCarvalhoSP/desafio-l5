import { Component, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.isLogged.subscribe((value) => {
      this.isLogged = value;
    })
  }

  logout() {
    this.loginService.logout();
  }
}
