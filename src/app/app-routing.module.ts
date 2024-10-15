import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: NavbarComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      { path: 'perfil', component: PerfilComponent},
      { path: 'proveedores', component: ProveedoresComponent},
      { path: 'trabajadores', component: TrabajadoresComponent}
    ]
  },
  { path: 'register', component: RegisterComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
