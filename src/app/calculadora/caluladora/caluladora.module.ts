import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from '../calculadora.component';
import { DoblarPipe } from '../doblar.pipe';
import { CalculadoraGuardService } from 'src/app/calcudora/calculadora-guard.service';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '', component: CalculadoraComponent,
  },
  {
    path: ':id', component: CalculadoraComponent,
    canActivate: [CalculadoraGuardService]
  }
];

@NgModule({
  declarations: [CalculadoraComponent, DoblarPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CalculadoraGuardService]
})
export class CaluladoraModule { }
