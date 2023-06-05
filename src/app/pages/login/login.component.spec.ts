import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/shared/services/login.service';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService = {login: jasmine.createSpy('login')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        {
          provide: LoginService, useValue: mockLoginService
        }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve tentar realizar o login', () => {
    component.loginForm.controls['email'].setValue('email@email.com');
    component.loginForm.controls['password'].setValue('12345678');

    component.login();
    expect(mockLoginService.login).toHaveBeenCalledWith('email@email.com', '12345678');
  });
});
