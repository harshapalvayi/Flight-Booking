import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirlinesComponent } from './add-airlines.component';

describe('AddFlightsComponent', () => {
  let component: AddAirlinesComponent;
  let fixture: ComponentFixture<AddAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAirlinesComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
