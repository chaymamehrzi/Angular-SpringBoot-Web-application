import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailequipesComponent } from './detailequipes.component';

describe('DetailequipesComponent', () => {
  let component: DetailequipesComponent;
  let fixture: ComponentFixture<DetailequipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailequipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailequipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
