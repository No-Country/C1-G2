import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

import { CarouselModule } from "../../../../shared/carousel/carousel.module";
import { FilterModule } from "../filter/filter.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CarouselModule,
    CommonModule,
    FilterModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
