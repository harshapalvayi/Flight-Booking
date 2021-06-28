import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimengModule} from '@shared/primeng.module';
import {ManageAirlinesRoutingModule} from '@features/manage-airlines/manage-airlines-routing.module';
import {ManageAirlinesComponent} from '@features/manage-airlines/manage-airlines.component';

@NgModule({
  declarations: [ManageAirlinesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
    ManageAirlinesRoutingModule
  ],
  exports: [
    ManageAirlinesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageAirlinesModule { }
