import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from '@core/error/error.component';
import {RoleGuardService} from './role-guard.service';
import {AuthGuard} from './auth.guard';
import {HomeComponent} from '@core/home/home.component';
import {SignInComponent} from '@features/users/sign-in/sign-in.component';
import {SignOutComponent} from '@features/users/sign-out/sign-out.component';
import {SignUpComponent} from '@features/users/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-sign-in',
    component: SignInComponent
  },
  {
    path: 'app-sign-up',
    component: SignUpComponent
  },
  {
    path: 'app-sign-out',
    component: SignOutComponent
  },
  {
    path: 'app-book-flight',
    loadChildren: () => import('@features/book-flight/book-flight.module').then(m => m.BookFlightModule),
    canActivate: [RoleGuardService, AuthGuard]
  },
  {
    path: 'app-manage-airlines',
    loadChildren: () => import('@features/manage-airlines/manage-airlines.module').then(m => m.ManageAirlinesModule),
    canActivate: [RoleGuardService, AuthGuard]
  },
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
