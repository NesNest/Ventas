import { Component, effect, inject } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/authServices/user.service';
import { TiendasComponent } from '../tiendas/tiendas.component';
import { ArticulosComponent } from '../articulos/articulos.component';
import { ClientesComponent } from '../clientes/clientes.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavComponent, TiendasComponent, ArticulosComponent, ClientesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private userService = inject(UserService);
  userLogged = this.userService.isUserLogged();

  constructor() {
    effect(() => {
      this.userLogged = this.userService.isUserLogged();
    });
  }

  toggleUserLogged(): void {
    this.userService.setUserLogged(!this.userLogged);
  }
}

