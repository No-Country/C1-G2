import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): undefined;
declare function customInitFunctions2(): undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    customInitFunctions();
    customInitFunctions2();
  }
}
