import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from '@core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UsersModule} from '@features/users/users.module';
// import {fakeBackendProvider} from '@shared/helper/fake-interceptors';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptors} from '@shared/helper/http-interceptors';
import {ErrorInterceptors} from '@shared/helper/error-interceptors';
import {PrimengModule} from '@shared/primeng.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    UsersModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true },

    // provider used to create fake backend
  //  fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
