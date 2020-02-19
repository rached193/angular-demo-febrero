import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTComponent } from './form-t/form-t.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormTComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormTestModule { }
