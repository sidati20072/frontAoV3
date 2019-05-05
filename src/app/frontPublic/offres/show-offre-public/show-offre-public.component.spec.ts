import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOffrePublicComponent } from './show-offre-public.component';

describe('ShowOffrePublicComponent', () => {
  let component: ShowOffrePublicComponent;
  let fixture: ComponentFixture<ShowOffrePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOffrePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOffrePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
