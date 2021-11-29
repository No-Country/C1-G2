import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

import { AccordionModule } from "src/app/shared/accordion/accordion.module";
import { CarouselModule } from "../../../../shared/carousel/carousel.module";
import { LoadingModule } from "src/app/shared/loading/loading.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AccordionModule,
    CarouselModule,
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes)],
})
export class HomeModule { }
