import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dir-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
