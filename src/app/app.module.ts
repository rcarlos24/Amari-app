import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienestarComponent } from './bienestar/bienestar.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiarioComponent } from './diario/diario.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienestarComponent,
    MotivacionComponent,
    DiarioComponent,
    ComunidadComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
