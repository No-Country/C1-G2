import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './components/dashboard-admin/full/full.component';


export const Approutes: Routes = [
  // ADMIN Modules
  {
    path: 'admin',
    component: FullComponent,
    children: [
      { path: '', loadChildren: () => import('./components/dashboard-admin/component.module').then(m => m.ComponentsModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  // AUTH Modules
  { path: 'login', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  // USER Landing
  { path: 'home', loadChildren: () => import('./components/user-landing/user-landing.module').then(m => m.UserLandingModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
