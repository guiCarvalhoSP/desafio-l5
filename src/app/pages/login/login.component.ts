import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{
  loginForm: FormGroup;
  hide: boolean = true;
  constructor(
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

  action() {
    console.log(this.loginForm.get('password')?.hasError('minlength'));

  }
}
