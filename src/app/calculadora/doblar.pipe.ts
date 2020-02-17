import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doblar'
})
export class DoblarPipe implements PipeTransform {

  transform(value: number): number {
    return value * 2 ;
  }

}
