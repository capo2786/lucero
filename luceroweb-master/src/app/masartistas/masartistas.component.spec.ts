import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasartistasComponent } from './masartistas.component';

describe('MasartistasComponent', () => {
  let component: MasartistasComponent;
  let fixture: ComponentFixture<MasartistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasartistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasartistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
