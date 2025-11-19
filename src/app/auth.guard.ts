import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const refreshToken = localStorage.getItem('refreshToken');

  // ❌ If user is NOT logged in → redirect to login
  if (!refreshToken) {
    setTimeout(() => router.navigate(['/login']), 0);
    return false;
  }

  // ✅ User allowed
  return true;
};
