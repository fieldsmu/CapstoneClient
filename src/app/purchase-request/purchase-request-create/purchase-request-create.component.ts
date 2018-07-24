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
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

title: String = "Purchase Request Create";

purchaserequest: PurchaseRequest = new PurchaseRequest();

products: Product[];

users:User[];

create(): void {
	this.purchaserequestsvc.create(this.purchaserequest)
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
