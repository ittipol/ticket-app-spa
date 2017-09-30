import { Component, OnInit, AfterViewInit, ViewChild, HostBinding, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
// import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @HostBinding('class') sideBarClass = 'side-nav';
  @HostBinding('style.height.px') height:number;
  @HostBinding('style.top.px') top:number;

	public currentButton: string = '/concert'

	public buttons: any = [
		{
			title: '<i class="fa fa-music"></i>Concert - LiveShow',
			link: '/concert'
		},
		{
			title: '<i class="fa fa-plane"></i>Travel Ticket',
			link: '/travel'
		},
		{
			title: '<i class="fa fa-ticket"></i>Voucher - Coupon',
			link: '/voucher'
		}
	]

   constructor(private location: Location, private elementRef: ElementRef) {
   	
   	if(location.path() !== '') {
   		this.currentButton = location.path();
   	}
    
  }

  ngOnInit() {}

  ngAfterViewInit() {
  	let navHeight = this.elementRef.nativeElement.parentNode.querySelector('.nav-fixed').clientHeight;

    this.elementRef.nativeElement.style.top = navHeight+'px'
    this.elementRef.nativeElement.style.height = (window.innerHeight - navHeight) + 'px'
  }

  activeBtn(event, button) {
  	this.currentButton = button.link
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let navHeight = this.elementRef.nativeElement.parentNode.querySelector('.nav-fixed').clientHeight;
    this.height = event.target.innerHeight - navHeight;
    this.top = navHeight;
  }

}
