import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { BienestarComponent } from '../bienestar/bienestar.component';
import { MotivacionComponent } from '../motivacion/motivacion.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'bienestar',
        component: BienestarComponent
      },
      {
        path: 'motivacion',
        component: MotivacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
