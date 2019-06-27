import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureEntrepriseShowComponent } from './facture-entreprise-show.component';

describe('FactureEntrepriseShowComponent', () => {
  let component: FactureEntrepriseShowComponent;
  let fixture: ComponentFixture<FactureEntrepriseShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureEntrepriseShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureEntrepriseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
