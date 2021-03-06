import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../purchase-request';
import { PurchaseRequestService } from '../purchase-request.service';
import { JsonResponse } from '../../utility/json-response';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';
import {CurrencyPipe } from '@angular/common';
import { SortPipe } from '../../utility/sort.pipe';
import { SearchPurchaseRequestReviewPipe } from '../../utility/search-purchase-request-review.pipe';



@Component({
	selector: 'app-purchase-request-review',
	templateUrl: './purchase-request-review.component.html',
	styleUrls: ['./purchase-request-review.component.css']
})

export class PurchaseRequestReviewComponent implements OnInit {

	title:string="Purchase Request Reviews";

	purchaserequests: PurchaseRequest[];
	filteredPurchaseRequests: PurchaseRequest[] = [];

	searchCriteria: string = '';

	sortProperty: string = "Id";
  	sortOrder: string = "asc";
	  sort(sortBy: string): void {
	    if(sortBy === this.sortProperty)
	      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
	    else {
	      this.sortProperty = sortBy;
	      this.sortOrder = 'asc';
	    }
	  }

	constructor(private purchaserequestsvc: PurchaseRequestService, private systemsrv: SystemService, private router: Router) { }

	ngOnInit() {

		if(this.systemsrv.loggedInUser == null) {
			this.router.navigateByUrl('/users/login');
		}
		console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

		this.purchaserequestsvc.list()
		.subscribe(resp => {
			this.purchaserequests = resp.Data;
			for (let pr of this.purchaserequests) {
				if ((pr.UserId != this.systemsrv.loggedInUser.Id || this.systemsrv.loggedInUser.Username === "sa") && pr.Status == "Review") {
					this.filteredPurchaseRequests.push(pr);
				}
			}
			for (let fpr of this.filteredPurchaseRequests) {
				fpr.PRUser = fpr.User.Username;
			}
		});
	}
}