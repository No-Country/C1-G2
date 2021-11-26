import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-lost',
  templateUrl: './pets-lost.component.html',
  styleUrls: ['./pets-lost.component.css']
})
export class PetsLostComponent implements OnInit {
  lost: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
