import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, HostBinding } from '@angular/core';
import * as $ from 'jquery'

import { DatafeedComponent } from '../../components/datafeed/datafeed.component'

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit, AfterViewInit {

	@ViewChild(DatafeedComponent) datafeedComponent:DatafeedComponent;

	@HostBinding('class') mainContentClass = 'main-content';
	@HostBinding('style.height.px') height: number

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  	this.datafeedComponent.setLoadingData('concert')
  	this.height = window.innerHeight - this.elementRef.nativeElement.parentElement.querySelector('.nav-fixed').clientHeight;
  }

  ngAfterViewInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = window.innerHeight - this.elementRef.nativeElement.parentElement.querySelector('.nav-fixed').clientHeight;
  }

}
