import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesEnrepriseComponent } from './modules-enreprise.component';

describe('ModulesEnrepriseComponent', () => {
  let component: ModulesEnrepriseComponent;
  let fixture: ComponentFixture<ModulesEnrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesEnrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesEnrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
