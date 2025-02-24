import { Component, NgModule, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { TiendaService } from './services/entitiesServices/tienda.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent} from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'clientes', component: ClientesComponent }
];
  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, FooterComponent, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ventas';
  tiendaService = inject(TiendaService);
  tienda: any[] = [];

  constructor() {
    this.tiendaService.getTiendas().subscribe(data => {
      this.tienda = data;
    });
  }
}

