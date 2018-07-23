import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Vendor } from '../../vendor/vendor';
import { VendorService } from '../../vendor/vendor.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

title = "Product Edit";

product: Product;

vendors: Vendor[];

change(): void {
	this.productsvc.change(this.product) 
		.subscribe(resp => {
			console.log(resp);
			this.router.navigateByUrl('/products/list');
		});
}

  constructor(private productsvc: ProductService, private router: Router, private route: ActivatedRoute, private vendorsvc: VendorService) { }

  ngOnInit() { 
  	let id = this.route.snapshot.params.id;
  	console.log("id=",id);

  	this.vendorsvc.list()
  		.subscribe(resp => {
  			this.vendors = resp.Data;
  			console.log(resp);
  		});

  	this.productsvc.get(id)
  		.subscribe(resp => {
  			this.product=resp.Data;
  			console.log(resp);
  		});


  }

}
