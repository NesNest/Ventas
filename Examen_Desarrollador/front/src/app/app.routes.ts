import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'clientes', component: ClientesComponent }

];  


