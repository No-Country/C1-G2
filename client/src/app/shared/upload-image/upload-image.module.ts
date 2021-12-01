import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadImageComponent } from "./upload-image.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: UploadImageComponent }];

@NgModule({
  declarations: [UploadImageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UploadImageComponent],
})
export class UploadImageModule {}
