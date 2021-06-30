import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimengModule} from '@shared/primeng.module';
import { SearchAirlinesRoutingModule } from './search-airlines-routing.module';
import {SearchAirlinesComponent} from './search-airlines.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateModule} from '@shared/templates/template.module';

@NgModule({
  declarations: [
    SearchAirlinesComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        PrimengModule,
        TemplateModule,
        ReactiveFormsModule,
        SearchAirlinesRoutingModule
    ],
  exports: [
    SearchAirlinesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchAirlinesModule { }
