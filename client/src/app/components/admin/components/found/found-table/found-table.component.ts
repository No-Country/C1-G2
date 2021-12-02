import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found-table',
  templateUrl: './found-table.component.html',
  styleUrls: ['./found-table.component.css']
})
export class FoundTableComponent implements OnInit {
  found: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
