import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CardDetailComponent } from '../card-detail/card-detail.component';

const APP_ROUTES: Routes = [
  { path: 'pet/details/:id', component: CardDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];



@NgModule({
  declarations: [CardDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES)
]


})
export class CardModule { }
