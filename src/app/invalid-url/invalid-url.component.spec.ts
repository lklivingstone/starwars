import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidURL } from './invalid-url.component';

describe('InvalidURLComponent', () => {
  let component: InvalidURL;
  let fixture: ComponentFixture<InvalidURL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidURL]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvalidURL);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
