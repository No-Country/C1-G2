import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLandingComponent } from './user-landing.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [{
  path: '',
  component: UserLandingComponent,
  children: [
    { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' },
  ]
}];

@NgModule({
  declarations: [
    UserLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES)
  ]
})
export class UserLandingModule { }
