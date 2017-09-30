import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, HostBinding } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.css']
})
export class ContentPanelComponent implements OnInit, AfterViewInit {

  @HostBinding('class') contentPanelClass = 'content-panel';
  @HostBinding('style.height.px') height:number;
  @HostBinding('style.width.px') width:number;
  @HostBinding('style.top.px') top:number;
  @HostBinding('style.right.px') right:any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  ngAfterViewInit() {
  }

  close() {
    // Get Content El
    // this.rd.addClass()
  }

}
