import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../purchase-request/purchase-request';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { PurchaseRequestLineitem } from '../../purchase-request-lineitem/purchase-request-lineitem';
import { PurchaseRequestLineitemService } from '../../purchase-request-lineitem/purchase-request-lineitem.service';
import { SystemService } from '../../system/system.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-purchase-request-lineitem-review',
  templateUrl: './purchase-request-lineitem-review.component.html',
  styleUrls: ['./purchase-request-lineitem-review.component.css']
})
export class PurchaseRequestLineitemReviewComponent implements OnInit {

	title: string = "Purchase Request Review";
  	purchaserequest: PurchaseRequest;
    reject: boolean = false;

approve(): void {
  this.purchaserequest.RejectionReason="N/A";
  this.purchaserequest.Status="Approved";
  this.purchaserequestsrv.change(this.purchaserequest)
    .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/purchaserequests/review');
    });
}

rejectstart(): void {
  this.reject = true;
}

rejectcomplete(): void {
  this.purchaserequest.Status="Rejected";
    this.purchaserequestsrv.change(this.purchaserequest)
    .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/purchaserequests/review');
         });
}

  constructor(
  	private systemsrv: SystemService,
  	private route: ActivatedRoute,
  	private router: Router,
  	private purchaserequestsrv: PurchaseRequestService,
  	private purchaserequestlineitemsrv: PurchaseRequestLineitemService) {}

  ngOnInit() {
  	if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  	let id = this.route.snapshot.params.id;
  	console.log("id: ", id);

  	this.purchaserequestsrv.get(id)
  		.subscribe(resp => {
  			this.purchaserequest=resp.Data;
  			console.log(resp);
  		});
  }
}
