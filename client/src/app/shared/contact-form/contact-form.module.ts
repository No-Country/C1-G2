import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
],
exports: [ContactFormComponent]

})
export class ContactFormModule { }
