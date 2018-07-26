import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineitem } from '../../purchase-request-lineitem/purchase-request-lineitem';
import { PurchaseRequestLineitemService } from '../../purchase-request-lineitem/purchase-request-lineitem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { JsonResponse } from '../../utility/json-response';
import { Purchaseorder } from '../../view-models/purchaseorder';

@Component({
  selector: 'app-vendor-purchase-order',
  templateUrl: './vendor-purchase-order.component.html',
  styleUrls: ['./vendor-purchase-order.component.css']
})

export class VendorPurchaseOrderComponent implements OnInit {

title: String = "Purchase Order"
purchaseorderitems: Purchaseorder[];

  constructor(
  	private purchaserequestlineitemsrv: PurchaseRequestLineitemService,
  	private route: ActivatedRoute,
  	private systemsrv: SystemService,
  	private router: Router
  	) { }

  ngOnInit() {
  	if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

	let id = this.route.snapshot.params.id;
    this.purchaserequestlineitemsrv.purchaseorder(id)
    	.subscribe(resp => {
    		console.log(resp);
    		this.purchaseorderitems = resp.Data;
    	});
  }
}
