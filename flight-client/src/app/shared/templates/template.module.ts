import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {PrimengModule} from '../primeng.module';
import {UserErrorsComponent} from '@shared/templates/user-errors/user-errors.component';

@NgModule({
  declarations: [
      MessageComponent,
      UserErrorsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MessageComponent,
    UserErrorsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TemplateModule { }
