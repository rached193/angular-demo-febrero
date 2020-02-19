import { AbstractControl } from '@angular/forms';

export function ValidatorMayor(edadM: number) {

  return (control: AbstractControl) => {
    if (control.value > edadM) {
      return { mayor: true };
    } else {
      return null;
    }
  };
}
