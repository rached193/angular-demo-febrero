import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './generar-c.component.html',
  styleUrls: ['./generar-c.component.css']
})
export class GenerarCComponent implements OnInit {

  nombre = 'Jose';
  apellidos = 'Plaza Azul';
  direccion = 'Arriba';

  cuenta = 0;

  mostrar = true;

  color = 'green';

  constructor() {
    console.log(this.nombre);
  }

  ngOnInit(): void {
  }

  click(event): void {
    console.log(event);
  }

  getTitle(): string {
    return '!Esta Vivo';
  }


  sumar(): void {
    this.cuenta++;
  }

}
