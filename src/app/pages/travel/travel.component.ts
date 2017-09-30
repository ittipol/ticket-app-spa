import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery'

import { DatafeedComponent } from '../../components/datafeed/datafeed.component'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

	@ViewChild(DatafeedComponent) datafeedComponent:DatafeedComponent;

  constructor() { }

  ngOnInit() {
  	this.datafeedComponent.setLoadingData('travel')
  }

}
