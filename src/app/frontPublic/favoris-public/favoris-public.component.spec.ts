import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisPublicComponent } from './favoris-public.component';

describe('FavorisPublicComponent', () => {
  let component: FavorisPublicComponent;
  let fixture: ComponentFixture<FavorisPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
