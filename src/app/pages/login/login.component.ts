import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{
  loginForm: FormGroup;
  hide: boolean = true;
  constructor(
    private loginService: LoginService,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnChanges() {
    console.log(this.loginForm.errors);

  }

  login() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    this.loginService.login(email, password);
  }
}
