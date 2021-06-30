import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from '@features/users/sign-in/sign-in.component';
import {SignUpComponent} from '@features/users/sign-up/sign-up.component';
import {SignOutComponent} from '@features/users/sign-out/sign-out.component';
import {PrimengModule} from '@shared/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateModule} from '@shared/templates/template.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimengModule,
    TemplateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
