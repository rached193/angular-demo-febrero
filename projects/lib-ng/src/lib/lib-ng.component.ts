import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-lib-ng',
  template: `
    <p>
      lib-ng works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibNgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
