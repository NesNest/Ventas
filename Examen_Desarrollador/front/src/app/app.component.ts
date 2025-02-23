import { Component, NgModule, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { TiendaService } from './tienda.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent} from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login' , component: LoginComponent },
  //{ path: 'logout', component: LogoutComponent },
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

