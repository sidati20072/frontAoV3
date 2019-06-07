import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPriveComponent } from './sidebar-prive.component';

describe('SidebarPriveComponent', () => {
  let component: SidebarPriveComponent;
  let fixture: ComponentFixture<SidebarPriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
