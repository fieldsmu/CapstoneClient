import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestLineitem } from '../purchase-request-lineitem';
import { PurchaseRequestLineitemService } from '../purchase-request-lineitem.service';



@Component({
	selector: 'app-purchase-request-lineitem-edit',
	templateUrl: './purchase-request-lineitem-edit.component.html',
	styleUrls: ['./purchase-request-lineitem-edit.component.css']
})
export class PurchaseRequestLineitemEditComponent implements OnInit {

	title: string = "Purchase Request Lineitem Edit"
	purchaserequestlineitem: PurchaseRequestLineitem;

	constructor(
		private route: ActivatedRoute,
		private purchaserequestlineitemsvc: PurchaseRequestLineitemService,
		private systemsvc: SystemService,
		private router: Router
		) { }

change() {
	this.purchaserequestlineitemsvc.change(this.purchaserequestlineitem)
		.subscribe(resp => {
			console.log(resp);
			this.router.navigateByUrl('/purchaserequests/lineitems/'+this.purchaserequestlineitem.PurchaseRequestId);
		});
}

  ngOnInit() {

    if(this.systemsvc.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsvc.loggedInUser);

    let id = this.route.snapshot.params.id;
    console.log("id=",id);

    this.purchaserequestlineitemsvc.get(id)
    .subscribe(resp => {
      this.purchaserequestlineitem = resp.Data;
      console.log(resp);
    });
  }
