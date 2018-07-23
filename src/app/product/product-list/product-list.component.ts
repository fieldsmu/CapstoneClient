import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Product[];

title: string= "Product List";

  constructor(private productsvc: ProductService) { }

  ngOnInit() {
  	this.productsvc.list()
  		.subscribe(resp => {
  			this.products = resp.Data;
  			console.log(resp);
  		});
  }

}
