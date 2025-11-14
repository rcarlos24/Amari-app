import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { BienestarComponent } from '../bienestar/bienestar.component';
import { MotivacionComponent } from '../motivacion/motivacion.component';
import { DiarioComponent } from '../diario/diario.component';
import { ComunidadComponent } from '../comunidad/comunidad.component';
import { SeguridadComponent } from '../seguridad/seguridad.component';

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
      },
      {
        path: 'mi-diario',
        component: DiarioComponent
      },
      {
        path: 'comunidad',
        component: ComunidadComponent
      },
      {
        path: 'seguridad',
        component: SeguridadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
