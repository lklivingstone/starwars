import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetslistComponent } from './planetslist.component';

describe('PlanetslistComponent', () => {
  let component: PlanetslistComponent;
  let fixture: ComponentFixture<PlanetslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
