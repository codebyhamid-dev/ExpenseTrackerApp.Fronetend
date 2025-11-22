export function isRefreshTokenExpired(): boolean {
  const expiry = localStorage.getItem('refreshTokenExpiry');

  if (!expiry) return true; // no expiry → treat as expired

  const expiryDate = new Date(expiry);
  const now = new Date();

  if (now > expiryDate) {
    // Automatically clean local storage
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('refreshTokenExpiry');
    return true;
  }

  return false;
}
