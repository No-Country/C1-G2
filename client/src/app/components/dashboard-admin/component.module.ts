import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardsComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PetsAdoptionComponent } from './components/pets-adoption/pets-adoption.component';

const APP_ROUTES: Routes = [
  { path: 'card', component: CardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pets-adoption', component: PetsAdoptionComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    PetsAdoptionComponent
  ]
})
export class ComponentsModule { }
