import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planets } from './planets.component';

describe('PlanetsComponent', () => {
  let component: Planets;
  let fixture: ComponentFixture<Planets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Planets]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Planets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
