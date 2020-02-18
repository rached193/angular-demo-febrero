import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from '../agenda/agenda.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [AgendaComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class AgendaModule { }
