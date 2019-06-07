import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPriveComponent } from './navbar-prive.component';

describe('NavbarPriveComponent', () => {
  let component: NavbarPriveComponent;
  let fixture: ComponentFixture<NavbarPriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
