import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasserviciosComponent } from './masservicios.component';

describe('MasserviciosComponent', () => {
  let component: MasserviciosComponent;
  let fixture: ComponentFixture<MasserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
