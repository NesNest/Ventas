import { Component, signal, effect, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/authServices/user.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  userLogged: boolean = false;
  constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userService.userLogged$.subscribe(logged => {
      this.userLogged = logged;
      this.cdr.detectChanges();
    });
  }
}
