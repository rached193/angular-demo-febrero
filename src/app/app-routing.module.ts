import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OtroComponent } from './otro/otro.component';
import { CalculadoraGuardService } from './calcudora/calculadora-guard.service';


const routes: Routes = [
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/caluladora/caluladora.module')
    .then(m => m.CaluladoraModule),
  },
  { path: '', component: OtroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
