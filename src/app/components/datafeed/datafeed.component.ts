import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostBinding, HostListener } from '@angular/core';
import * as $ from 'jquery'

import { DatafeedService } from '../../services/datafeed/datafeed.service';

@Component({
  selector: 'app-datafeed',
  templateUrl: './datafeed.component.html',
  styleUrls: ['./datafeed.component.css']
})
export class DatafeedComponent implements OnInit, AfterViewInit {

  @HostBinding('class') datafeedClass = 'data-feed';

  private dataLoad: string

  public data: any = [
    {
      title: 'คอนเสิร์ต 50 ปี พรีแซยิด ป้าง นครินทร์',
      date: '30/09/2017',
      price: '500 บาท',
      save: '44%',
      validTill: '31/12/2017',
      images: [
        '/assets/images/img2.jpg'
      ]
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    },
    {
      title: 'ขายบัตรละครสี่แผ่นดิน 2 ใบ วันที่ 1 ตุลาคม 2560',
      date: '01/10/2017',
      price: '1000 บาท',
      sace: '33%',
    }
  ]

  constructor(private datafeedService: DatafeedService, private elementRef: ElementRef) { }

  ngOnInit() {
    if(typeof this.dataLoad === 'undefined') {
      this.dataLoad = 'all'
    }
  }

  ngAfterViewInit() {
    this.datafeedService.getFeed(this.dataLoad)
  }

  setLoadingData(data) {
    this.dataLoad = data
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
   //we'll do some stuff here when the window is scrolled
   console.log('www')
  }

}
