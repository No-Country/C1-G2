import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): undefined;

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

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
