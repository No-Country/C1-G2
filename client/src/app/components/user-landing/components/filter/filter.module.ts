import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, RouterModule],
  exports: [FilterComponent],
})
export class FilterModule { }
