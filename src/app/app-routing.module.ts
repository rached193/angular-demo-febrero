import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OtroComponent } from './otro/otro.component';
import { CalculadoraGuardService } from './calcudora/calculadora-guard.service';
import { AgendaComponent } from './agenda/agenda.component';
import { FormTComponent } from './form-test/form-t/form-t.component';


const routes: Routes = [
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/caluladora/caluladora.module')
      .then(m => m.CaluladoraModule),
  },
  { path: '', component: OtroComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'form', component: FormTComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
