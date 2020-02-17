import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerarCComponent } from './generar-c/generar-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HijoComponent } from './hijo/hijo.component';

import { SobresaltarDirective } from './sobresaltar.directive';
import { OtroComponent } from './otro/otro.component';
import { CaluladoraModule } from './calculadora/caluladora/caluladora.module';


@NgModule({
  declarations: [
    AppComponent,
    GenerarCComponent,
    HijoComponent,
    SobresaltarDirective,
    OtroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [GenerarCComponent]
})
export class AppModule { }
