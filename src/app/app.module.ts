import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerarCComponent } from './generar-c/generar-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HijoComponent } from './hijo/hijo.component';

import { SobresaltarDirective } from './sobresaltar.directive';
import { OtroComponent } from './otro/otro.component';
import { AgendaModule } from './agenda/agenda.module';
import { HttpClientModule } from '@angular/common/http';
import { FormTestModule } from './form-test/form-test.module';


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
    BrowserAnimationsModule,
    AgendaModule,
    HttpClientModule,
    FormTestModule
    ],
  providers: [],
  bootstrap: [GenerarCComponent]
})
export class AppModule { }
