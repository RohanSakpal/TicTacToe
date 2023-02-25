import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PracticeDashboardComponent } from './practice-dashboard/practice-dashboard.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:WelcomePageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'history',component:HistoryPageComponent},
  {path:'practice',component:PracticeDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
