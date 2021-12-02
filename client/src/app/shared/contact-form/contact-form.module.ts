import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
],
exports: [ContactFormComponent]

})
export class ContactFormModule { }
