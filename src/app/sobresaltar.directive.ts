import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirSobresaltar]'
})
export class SobresaltarDirective implements OnInit {

  @Input() color: string;

  constructor(private el: ElementRef) {

    console.log('soy la directiva');

  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
