import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


export const authGuard = () => {
  const router = inject(Router);
  const service = inject(LoginService);

  if(service.userIsLogged()) {
    return true;
  } else{
    return router.navigate(['/login']);
  }
}
