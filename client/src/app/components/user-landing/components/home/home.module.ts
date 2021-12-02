import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

// App Modules
import { AccordionModule } from "src/app/shared/accordion/accordion.module";
import { CarouselModule } from "../../../../shared/carousel/carousel.module";
import { FilterModule } from "../filter/filter.module";
import { LoadingModule } from "src/app/shared/loading/loading.module";
import { ContactFormModule } from "src/app/shared/contact-form/contact-form.module";
import { NavbarModule } from "../navbar/navbar.module";

const routes: Routes = [
  { path: "", component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ContactFormModule,
    NavbarModule,
    AccordionModule,
    CarouselModule,
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
    FilterModule
  ],
})
export class HomeModule { }
