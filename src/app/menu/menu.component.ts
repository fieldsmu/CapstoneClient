import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tabs = [
    { name: 'Home', link: 'home', fontawesome: 'fas fa-home'},
    { name: 'Users', link: 'users/list', fontawesome: 'fas fa-users'},
    { name: 'Purchase Requests', link: 'purchaserequests/list', fontawesome: 'fas fa-money-check'},
    { name: 'Review', link: 'purchaserequests/review', fontawesome: 'fas fa-search'},
    { name: 'Vendors', link: 'vendors/list', fontawesome: 'fas fa-building'},
    { name: 'Products', link: 'products/list', fontawesome: 'fab fa-product-hunt'},
  ];
  constructor() { }

  ngOnInit() { }

}
