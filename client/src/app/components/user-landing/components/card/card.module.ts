import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/user-landing/components/card/card.component';
@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
],
exports: [CardComponent]

})
export class CardModule { }
