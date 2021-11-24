import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-adoption',
  templateUrl: './pets-adoption.component.html',
  styleUrls: ['./pets-adoption.component.css']
})
export class PetsAdoptionComponent implements OnInit {
  adoption: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
