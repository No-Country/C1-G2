import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

import { CarouselModule } from "../../../../shared/carousel/carousel.module";
<<<<<<< HEAD
import { LoadingModule } from "src/app/shared/loading/loading.module";
=======
import { FilterModule } from "../filter/filter.module";
>>>>>>> 32c2a1e55a4977425ebe7951e15a0459de4ab3b7

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
<<<<<<< HEAD
    LoadingModule,
    RouterModule.forChild(routes)],
=======
    FilterModule,
    RouterModule.forChild(routes),
  ],
>>>>>>> 32c2a1e55a4977425ebe7951e15a0459de4ab3b7
})
export class HomeModule { }
