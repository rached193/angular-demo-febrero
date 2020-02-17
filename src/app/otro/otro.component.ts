import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dir-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
