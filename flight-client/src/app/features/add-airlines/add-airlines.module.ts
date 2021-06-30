import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimengModule} from '@shared/primeng.module';
import {TemplateModule} from '@shared/templates/template.module';
import { AddAirlinesRoutingModule } from './add-airlines-routing.module';
import {AddAirlinesComponent} from '@features/add-airlines/add-airlines.component';

@NgModule({
  declarations: [AddAirlinesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    TemplateModule,
    ReactiveFormsModule,
    AddAirlinesRoutingModule
  ],
  exports: [
    AddAirlinesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AddAirlinesModule { }
