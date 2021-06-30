import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from '@core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UsersModule} from '@features/users/users.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptors} from '@shared/helper/http-interceptors';
import {ErrorInterceptors} from '@shared/helper/error-interceptors';
import {PrimengModule} from '@shared/primeng.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import * as fromAppReducer from '@store/app.reducer';
import * as fromAppEffects from '@store/app.effects';

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
    PrimengModule,
    ReactiveFormsModule,
    EffectsModule.forRoot(fromAppEffects.AppEffects),
    StoreModule.forRoot(fromAppReducer.AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
