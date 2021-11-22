import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

import { CarouselModule } from "../../../../shared/carousel/carousel.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CarouselModule, CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
