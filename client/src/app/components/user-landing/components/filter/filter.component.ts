import { Component, OnInit, AfterViewInit } from "@angular/core";

declare function customInitFilter(): undefined;

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit, AfterViewInit {
  selectedItem = 0;

  buttons: { dataFilter: string; titulo: string }[] = [
    {
      dataFilter: "*",
      titulo: "All Meetings",
    },
    {
      dataFilter: ".soon",
      titulo: "Soon",
    },
    {
      dataFilter: ".imp",
      titulo: "Important",
    },
    {
      dataFilter: ".att",
      titulo: "Attractive",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    customInitFilter();
  }
}
