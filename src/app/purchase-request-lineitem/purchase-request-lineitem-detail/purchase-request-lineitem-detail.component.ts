import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';

import { PurchaseRequest } from '../../purchase-request/purchase-request';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';

import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-purchase-request-lineitem-detail',
  templateUrl: './purchase-request-lineitem-detail.component.html',
  styleUrls: ['./purchase-request-lineitem-detail.component.css']
})
export class PurchaseRequestLineitemDetailComponent implements OnInit {

title: string = "Purchase Request Lineitem Detail";

products: Product[];
purchaserequest: PurchaseRequest;

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private productsvc: ProductService,
  	private purchaserequestsvc: PurchaseRequestService,
  	private systemsrv: SystemService
  	) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  		let id = this.route.snapshot.params.id;
		console.log("id=",id);

		this.productsvc.get(id)
		.subscribe(resp => {
			this.products = resp.Data;
			console.log(resp);
		});

		this.purchaserequestsvc.get(id)
			.subscribe( resp => {
				this.purchaserequest = resp.Data;
				console.log(resp);
			});
	}

}
