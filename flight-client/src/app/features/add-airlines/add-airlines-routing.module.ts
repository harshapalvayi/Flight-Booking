import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAirlinesComponent} from '@features/add-airlines/add-airlines.component';

const routes: Routes = [
  {
    path: '',
    component: AddAirlinesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAirlinesRoutingModule { }
