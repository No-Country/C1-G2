import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // TODO: modificar modelo card al schema actual y usar en data
  @Input() data!: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }
}
