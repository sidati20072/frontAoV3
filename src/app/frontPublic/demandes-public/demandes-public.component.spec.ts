import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesPublicComponent } from './demandes-public.component';

describe('DemandesPublicComponent', () => {
  let component: DemandesPublicComponent;
  let fixture: ComponentFixture<DemandesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
