import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request';
import {JsonResponse} from '../../utility/json-response';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

title: string = "Purchase Request List";

purchaserequests: PurchaseRequest[];

  constructor(private purchaserequestsvc: PurchaseRequestService) { }

	ngOnInit() {
    this.purchaserequestsvc.list()
  		.subscribe(resp => {
  			this.purchaserequests = resp.Data;
  			console.log(resp);
  		});
  	}
}