import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradasComponent } from './compradas.component';

describe('CompradasComponent', () => {
  let component: CompradasComponent;
  let fixture: ComponentFixture<CompradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
