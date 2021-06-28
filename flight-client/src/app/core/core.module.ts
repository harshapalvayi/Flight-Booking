import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {NotificationComponent} from './notification/notification.component';
import {PrimengModule} from '@shared/primeng.module';
import {TemplateModule} from '@shared/templates/template.module';
import {ErrorComponent} from '@core/error/error.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    TemplateModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    NotificationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
