import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchAirlinesComponent} from './search-airlines.component';

const routes: Routes = [
  {
    path: '',
    component: SearchAirlinesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchAirlinesRoutingModule { }
