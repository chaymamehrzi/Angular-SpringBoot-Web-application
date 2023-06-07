import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultEnseignantComponent } from './consult-enseignant.component';

describe('ConsultEnseignantComponent', () => {
  let component: ConsultEnseignantComponent;
  let fixture: ComponentFixture<ConsultEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
