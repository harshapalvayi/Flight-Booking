import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './message/message.component';
import {PrimengModule} from '../primeng.module';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MessageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TemplateModule { }
