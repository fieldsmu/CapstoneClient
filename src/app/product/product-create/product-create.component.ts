import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Vendor } from '../../vendor/vendor';
import { VendorService } from '../../vendor/vendor.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

title = "Product Create";

product: Product = new Product();

vendors: Vendor[];

create(): void {
	this.productsvc.create(this.product) 
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
			this.router.navigateByUrl('/products/list');
		});
}

  constructor(private productsvc: ProductService, private router: Router, private route: ActivatedRoute, private vendorsvc: VendorService) { }

  ngOnInit() { 

  	this.vendorsvc.list()
  		.subscribe(resp => {
  			this.vendors = resp.Data;
  			console.log(resp);
  		});
  }
}