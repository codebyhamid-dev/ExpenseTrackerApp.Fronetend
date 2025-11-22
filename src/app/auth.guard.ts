import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isRefreshTokenExpired } from './Utils/token.helper';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // ❌ If token is missing or expired → redirect to login
  if (!localStorage.getItem('refreshToken') || isRefreshTokenExpired()) {
    setTimeout(() => router.navigate(['/login']), 0);
    return false;
  }
  return true;
};
