import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { BookFlightRoutingModule } from './book-flight-routing.module';
import {BookFlightComponent} from './book-flight.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimengModule} from '@shared/primeng.module';

@NgModule({
  declarations: [
    BookFlightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
    BookFlightRoutingModule,
  ],
  exports: [
    BookFlightComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BookFlightModule { }
