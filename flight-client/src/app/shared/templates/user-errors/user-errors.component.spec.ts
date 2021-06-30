import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserErrorsComponent } from './user-errors.component';

describe('UserErrorsComponent', () => {
  let component: UserErrorsComponent;
  let fixture: ComponentFixture<UserErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserErrorsComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
