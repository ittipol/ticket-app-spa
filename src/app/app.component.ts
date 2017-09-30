import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private meta: Meta, private elementRef: ElementRef) {

		meta.addTags([
			// {
			// 	name: 'author', content: 'example.com'
			// },
			{
				name: 'leyword', content: 'Concert, LiveShow, Travel, Ticket, Voucher, Coupon'
			},
			{
				name: 'description', content: 'desc!!!'
			}
		])

	}

	ngOnInit() {
	}

}
