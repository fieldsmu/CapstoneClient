import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	title = 'Product Detail';

	product: Product;

	deleteConfirmed: boolean = false;

	remove(): void {
		this.deleteConfirmed = true;
	}

	confirmed (){
		this.productsvc.remove(this.product)
			.subscribe(resp => {
				console.log("Product removed: ", resp);	
				this.router.navigateByUrl('/products/list');
			});
	}

	constructor(private productsvc: ProductService, private route: ActivatedRoute, private systemsrv: SystemService, private router: Router) { }


	ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

		let id = this.route.snapshot.params.id;
		console.log("id=",id);

		this.productsvc.get(id)
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
		});
	}
}