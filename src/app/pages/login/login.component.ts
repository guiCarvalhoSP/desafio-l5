import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide: boolean = true;
  constructor(
    private loginService: LoginService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }

  login() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    this.loginService.login(email, password);
  }
}
