import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureEntrepriseComponent } from './facture-entreprise.component';

describe('FactureEntrepriseComponent', () => {
  let component: FactureEntrepriseComponent;
  let fixture: ComponentFixture<FactureEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
