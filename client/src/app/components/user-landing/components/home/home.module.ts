import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

// App Modules
import { AccordionModule } from "src/app/shared/accordion/accordion.module";
import { CarouselModule } from "../../../../shared/carousel/carousel.module";
import { LoadingModule } from "src/app/shared/loading/loading.module";
import { NavbarModule } from "../navbar/navbar.module";

// Components
import { FilterComponent } from "../filter/filter.component";
import { CardComponent } from "../card/card.component";
import { CardDetailComponent } from "../card-detail/card-detail.component";
 
const routes: Routes = [
  { path: "", component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
    CardComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AccordionModule,
    CarouselModule,
    LoadingModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
