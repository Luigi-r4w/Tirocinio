import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  /* authService: AuthService  
  return authService.authenticated();*/
  return false
};
