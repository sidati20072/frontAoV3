import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPriveComponent } from './footer-prive.component';

describe('FooterPriveComponent', () => {
  let component: FooterPriveComponent;
  let fixture: ComponentFixture<FooterPriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
