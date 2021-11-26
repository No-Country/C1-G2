import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): undefined;
declare function customInitFunctions2(): undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
    customInitFunctions();
    customInitFunctions2();

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
