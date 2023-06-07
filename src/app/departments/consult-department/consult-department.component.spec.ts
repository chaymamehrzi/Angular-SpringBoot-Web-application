import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDepartmentComponent } from './consult-department.component';

describe('ConsultDepartmentComponent', () => {
  let component: ConsultDepartmentComponent;
  let fixture: ComponentFixture<ConsultDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
