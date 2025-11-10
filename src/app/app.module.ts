import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { FormsModule } from '@angular/forms';
import { DiarioComponent } from './diario/diario.component';
import { ComunidadComponent } from './comunidad/comunidad.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienestarComponent,
    MotivacionComponent,
    DiarioComponent,
    ComunidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
