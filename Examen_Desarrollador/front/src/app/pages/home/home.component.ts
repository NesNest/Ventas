import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private userService: UserService) { }

  get userLogged(): boolean {
    return this.userService.isUserLogged();
  }

  toggleUserLogged(): void {
    this.userService.setUserLogged(!this.userService.isUserLogged());
  }

}
