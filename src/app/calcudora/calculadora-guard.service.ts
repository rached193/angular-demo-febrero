import { Injectable } from '@angular/core';
import { CanActivate, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CalculadoraGuardService implements CanActivate, Resolve<boolean> {

  constructor() { }

  canActivate(): boolean {
    console.log('Guarda de Calculadora');
    return true;
  }

  resolve(): Observable<boolean> {
    console.log('Resolve de Calculadora');
    return of(true);
  }

}
