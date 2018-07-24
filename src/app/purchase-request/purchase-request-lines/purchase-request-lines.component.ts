import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router'
import {PurchaseRequestLineitemService } from '../../purchase-request-lineitem/purchase-request-lineitem.service';
import {PurchaseRequestLineitem } from '../../purchase-request-lineitem/purchase-request-lineitem';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  purchaserequestlineitems: PurchaseRequestLineitem[];
  filterPurchaseRequestLineitems: PurchaseRequestLineitem[] = [];

  title: string = "Purchase Request Lineitem List";

  constructor(private systemsrv: SystemService, private router: Router, private prlineitemsrv: PurchaseRequestLineitemService) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);
    
    this.prlineitemsrv.list()
    .subscribe(resp => {
      this.purchaserequestlineitems = resp.Data;
      console.log(resp);
      for (let pr of this.purchaserequestlineitems) {
      if (pr.PurchaseRequestId == this.purchaserequest.Id) {
        this.filteredPurchaseRequests.push(pr);
    });

  }

}

