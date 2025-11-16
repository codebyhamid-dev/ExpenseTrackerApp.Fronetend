import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto, RegisterDto } from '../../interfaces/AuthInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private appUrl = 'https://localhost:44360/api/auth/';

  constructor(private http: HttpClient) {}
  // -------------------------
  // Register User
  // POST: /api/auth/register
  // -------------------------
  register(data: RegisterDto): Observable<any> {
    return this.http.post(`${this.appUrl}register`, data);
  }

  // -------------------------
  // Login User
  // POST: /api/auth/login
  // -------------------------
  login(data: LoginDto): Observable<any> {
    return this.http.post(`${this.appUrl}login`, data);
  }
}
