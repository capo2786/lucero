import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuceroysushowComponent } from './luceroysushow.component';

describe('LuceroysushowComponent', () => {
  let component: LuceroysushowComponent;
  let fixture: ComponentFixture<LuceroysushowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuceroysushowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuceroysushowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
