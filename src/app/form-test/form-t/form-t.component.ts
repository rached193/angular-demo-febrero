import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMayor } from '../validator-custom';
import { debounceTime } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

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
      edad: [{ value: 0, disabled: true }, [ValidatorMayor(10)]]
    }
    );

    combineLatest([
      this.registerForm.get('firstname').valueChanges,
      this.registerForm.get('email').valueChanges
    ])
       .pipe(debounceTime(1000))
      .subscribe(([x, y]) => {
        console.log(x)
        if (x && this.registerForm.get('email').valid) {
          this.registerForm.get('edad').enable();

        } else {
          this.registerForm.get('edad').disable();
        }
      });
  }



}
