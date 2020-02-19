import { AbstractControl } from '@angular/forms';

export function ValidatorMayor(control: AbstractControl) {
  if (control.value > 3) {
    return { mayor: true };
  } else {
    return null;
  }
}
