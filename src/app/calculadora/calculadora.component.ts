import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dir-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  campoA = 0;
  campoB = 0;

  resultados = 0;

  constructor(private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activeRoute.data.subscribe(data => {
      console.log(data);
    })
    this.activeRoute.params.subscribe(params => {
      console.log(params.id);
    })
    
  }

  sumar(a: number, b: number): number {
    console.log(a);
    console.log(b);
    return a - -b;
  }

  restar(a: number, b: number): number {
    console.log(a);
    console.log(b);
    return a - b;
  }

  multiplicacion(a: number, b: number): number {
    console.log(a);
    console.log(b);
    return a * b;
  }

  division(a: number, b: number): number {
    console.log(a);
    console.log(b);
    return a / b;
  }

}
