import { Routes, RouterModule } from '@angular/router';

// Components
import { FullComponent } from './components/admin/full/full.component';

export const Approutes: Routes = [
  // ADMIN Modules
  {
    path: 'admin',
    component: FullComponent,
    children: [
      { path: '', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
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
