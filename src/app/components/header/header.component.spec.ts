import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LoginService } from 'src/app/shared/services/login.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: SnackbarService, useValue: {
            openSnackBar() {}
           }

        }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    loginService = TestBed.inject(LoginService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer realizar o logout da aplicação', () => {

    let spied = spyOn(loginService, 'logout').and.returnValue();

    component.logout();
    expect(spied).toHaveBeenCalled();
  });
});
