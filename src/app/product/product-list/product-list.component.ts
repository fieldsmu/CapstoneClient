import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Product[];

title: string= "Product List";

  constructor(private productsvc: ProductService, private systemsrv: SystemService, private router: Router) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  	this.productsvc.list()
  		.subscribe(resp => {
  			this.products = resp.Data;
  			console.log(resp);
  		});
  }

}
