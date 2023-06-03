import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.isLogged.subscribe((value) => {
      this.isLogged = value;
    })
  }
}
