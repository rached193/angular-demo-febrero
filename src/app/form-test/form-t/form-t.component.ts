import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMayor } from '../validator-custom';

@Component({
  selector: 'dir-form-t',
  templateUrl: './form-t.component.html',
  styleUrls: ['./form-t.component.scss']
})
export class FormTComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      edad: [0, [ValidatorMayor]]
    });
  }

}
