import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./user-actions/user-actions.module').then(m => m.UserActionsModule) },
  { path: 'tour', loadChildren: () => import('./tour/tour.module').then(m => m.TourModule)},
  { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
