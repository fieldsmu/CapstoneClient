import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menudata = [
	{ href:"/home", display: "Home"},
	{ href:"/about", display: "About"},
	{ href:"/users/list", display: "User"},
	{ href:"/vendors/list", display: "Vendor"},
	{ href:"/products/list", display: "Product"},
	{ href: "/purchaserequests/list", display: "Purchase Request"},
	{ href: "/users/login", display: "Login/Logout"},
	{ href: "/purchaserequestlineitems/list", display: "Lineitems" }
	];
	
  constructor() { }

  ngOnInit() { }

}
