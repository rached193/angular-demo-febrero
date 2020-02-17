import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCComponent } from './generar-c.component';

describe('GenerarCComponent', () => {
  let component: GenerarCComponent;
  let fixture: ComponentFixture<GenerarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
