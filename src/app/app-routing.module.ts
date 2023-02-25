import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeDashboardComponent } from './practice-dashboard/practice-dashboard.component';

const routes: Routes = [
  {path:'',component:PracticeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
