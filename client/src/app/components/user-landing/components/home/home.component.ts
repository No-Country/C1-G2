import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';

declare function customInitFunctions(): undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('homeVideo', { static: false })
  homeVideo!: ElementRef<any>;

  public isLoading: boolean = true;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
    customInitFunctions();

    const source = timer(1000);
    source.subscribe(() => {
      this.isLoading = false;
      this.homeVideo.nativeElement.muted = true;
      this.homeVideo.nativeElement.autoplay = true;
    });
  }

  ngAfterViewInit(): void {
    this.homeVideo.nativeElement.muted = true;
    this.homeVideo.nativeElement.autoplay = true;
  }
}
