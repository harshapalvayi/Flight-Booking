import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookFlightComponent} from './book-flight.component';

const routes: Routes = [
  {
    path: '',
    component: BookFlightComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookFlightRoutingModule { }
