import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PrimengModule} from '../../primeng.module';
import {MessagesService} from '../../services/messages/messages.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, PrimengModule],
      declarations: [ MessageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MessagesService]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
