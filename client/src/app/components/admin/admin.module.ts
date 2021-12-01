import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Angular Fire
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// Components
import { CardsComponent } from "./components/card/card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdoptionTableComponent } from "./components/adoption/adoption-table/adoption-table.component";
import { AdoptionPublishFormComponent } from "./components/adoption/adoption-form/adoption-publish-form.component";
import { UploadImageModule } from "../../shared/upload-image/upload-image.module";

const APP_ROUTES: Routes = [
  { path: "card", component: CardsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "adoption-table", component: AdoptionTableComponent },
  { path: "adoption-publish", component: AdoptionPublishFormComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UploadImageModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  declarations: [
    AdoptionPublishFormComponent,
    AdoptionTableComponent,
    DashboardComponent,
    CardsComponent,
  ],
})
export class AdminModule {}
