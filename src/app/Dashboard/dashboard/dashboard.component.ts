import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      // No refresh token — just clear storage and redirect
      localStorage.clear();
      this.router.navigate(['/login']);
      return;
    }

    this.authService.logout({ refreshToken }).subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigate(['/login']);
        alert('Logged out successfully.');
      },
      error: (err) => {
        // Even if API fails, force logout on client
        alert(err?.error?.message || 'Logout failed, please try again.');
      },
    });
  }
}
