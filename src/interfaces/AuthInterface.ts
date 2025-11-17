export interface RegisterDto {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginDto {
  email: string;
  password: string;
}
