import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-found',
  templateUrl: './pets-found.component.html',
  styleUrls: ['./pets-found.component.css']
})
export class PetsFoundComponent implements OnInit {
  found: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
