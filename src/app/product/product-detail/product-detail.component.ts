import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';

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

	constructor(private productsvc: ProductService, private route: ActivatedRoute, private router: Router) { }


	ngOnInit() {
		let id = this.route.snapshot.params.id;
		console.log("id=",id);

		this.productsvc.get(id)
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
		});
	}
}