import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const refreshToken = localStorage.getItem('refreshToken');

  // ❌ If user is already logged in → redirect to dashboard
  if (refreshToken) {
    setTimeout(() => router.navigate(['/dashboard']), 0);
    return false;
  }

  // ✅  User is NOT logged in → allow access to login/signup
  return true;
};
