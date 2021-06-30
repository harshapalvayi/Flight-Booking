import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAirlinesComponent } from './search-airlines.component';

describe('BookFlightComponent', () => {
  let component: SearchAirlinesComponent;
  let fixture: ComponentFixture<SearchAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAirlinesComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
