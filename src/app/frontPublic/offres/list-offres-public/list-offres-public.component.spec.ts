import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffresPublicComponent } from './list-offres-public.component';

describe('ListOffresPublicComponent', () => {
  let component: ListOffresPublicComponent;
  let fixture: ComponentFixture<ListOffresPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOffresPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffresPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
