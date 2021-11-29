import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-table',
  templateUrl: './adoption-table.component.html',
  styleUrls: ['./adoption-table.component.css']
})
export class AdoptionTableComponent implements OnInit {
  adoption: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
