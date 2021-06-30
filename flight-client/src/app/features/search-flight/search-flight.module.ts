import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimengModule} from '@shared/primeng.module';
import { SearchFlightRoutingModule } from './search-flight-routing.module';
import {SearchFlightComponent} from './search-flight.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateModule} from '@shared/templates/template.module';

@NgModule({
  declarations: [
    SearchFlightComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        PrimengModule,
        TemplateModule,
        ReactiveFormsModule,
        SearchFlightRoutingModule
    ],
  exports: [
    SearchFlightComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchFlightModule { }
