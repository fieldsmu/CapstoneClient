import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request';
import {JsonResponse} from '../../utility/json-response';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

title: string = "Purchase Request List";

purchaserequests: PurchaseRequest[];

  constructor(private purchaserequestsvc: PurchaseRequestService, private systemsrv: SystemService, private router: Router) { }

	ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

    this.purchaserequestsvc.list()
  		.subscribe(resp => {
  			this.purchaserequests = resp.Data;
  			console.log(resp);
  		});
  	}
}