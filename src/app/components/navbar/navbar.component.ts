import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@HostBinding('class') navFixedClass = 'nav-fixed';

  constructor() { }

  ngOnInit() {
  }

}
