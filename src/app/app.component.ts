import { Component, HostListener } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged: boolean = false;

  isShowButton: boolean = false;
  startShowingButton = 250;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.isLogged.subscribe((value) => {
      this.isLogged = value;
    });
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.startShowingButton) {
      this.isShowButton = true;
    } else {
      this.isShowButton = false;
    }
  }

  goToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
