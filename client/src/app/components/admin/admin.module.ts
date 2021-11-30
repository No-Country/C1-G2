import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { CardsComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdoptionTableComponent } from './components/adoption/adoption-table/adoption-table.component';
import { AdoptionPublishFormComponent } from './components/adoption/adoption-form/adoption-publish-form.component';

const APP_ROUTES: Routes = [
  { path: 'card', component: CardsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adoption-table', component: AdoptionTableComponent },
  { path: 'adoption-publish', component: AdoptionPublishFormComponent },
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
    AdoptionPublishFormComponent,
    AdoptionTableComponent,
    DashboardComponent,
    CardsComponent
  ]
})
export class AdminModule { }
