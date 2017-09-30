import { Component, OnInit, Input, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @HostBinding('class') listBlockClass = 'list-block';

	@Input() item: any;

  constructor(private elementRef: ElementRef,  private rd: Renderer2) { }

  ngOnInit() {
  }

  displayContent(event, item) {

  	if(window.innerWidth <= 1440) {
      // display overlay bg
  		this.elementRef.nativeElement.parentNode.parentNode.querySelector('app-content-panel').style.right = 0
  	}
  }

}
