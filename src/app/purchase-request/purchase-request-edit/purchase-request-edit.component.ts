import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request';

import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';

import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})

export class PurchaseRequestEditComponent implements OnInit {

title: String = "Purchase Request Edit";

purchaserequest: PurchaseRequest;

products: Product[];

users:User[];

change(): void {
	this.purchaserequestsvc.change(this.purchaserequest)
		.subscribe(resp => {
			this.purchaserequest = resp.Data;
			console.log(resp);
			this.router.navigateByUrl('/purchaserequests/list');
		});
}
  constructor(private purchaserequestsvc: PurchaseRequestService, private router: Router, private usersvc: UserService, private productsvc: ProductService, private route: ActivatedRoute, private systemsrv: SystemService) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

    	let id = this.route.snapshot.params.id;
    	console.log("id: ", id);
    	this.purchaserequestsvc.get(id)
    		.subscribe(resp => {
    			this.purchaserequest=resp.Data;
  				console.log(resp);
    		});

    	this.productsvc.list()
  		.subscribe(resp => {
  			this.products = resp.Data;
  			console.log(resp);
  		});

     this.usersvc.list()
      .subscribe(resp => {
        this.users = resp.Data;
        console.log(resp);
      });
  	}
  }
