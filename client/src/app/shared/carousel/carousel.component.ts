import { Component, OnInit, AfterViewInit } from "@angular/core";

declare function customInitCarousel(): undefined;

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  imagenes: String[] = [
    "titulo 1",
    "titulo 2",
    "titulo 3",
    "titulo 4",
    "titulo 5",
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    customInitCarousel();
  }
}
