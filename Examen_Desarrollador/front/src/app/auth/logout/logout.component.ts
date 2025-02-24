import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/authServices/user.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Cerrando sesión...</p>`,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    this.logoutUser();
  }

  private logoutUser(): void {
    this.userService.setUserLogged(false);
    this.router.navigate(['/']);
  }
}
