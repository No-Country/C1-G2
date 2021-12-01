import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadImageComponent } from "./upload-image.component";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [UploadImageComponent],
  imports: [CommonModule],
  exports: [UploadImageComponent],
})
export class UploadImageModule {}
