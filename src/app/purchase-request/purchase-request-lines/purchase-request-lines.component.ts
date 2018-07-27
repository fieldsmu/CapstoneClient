import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router, ActivatedRoute } from '@angular/router'
import {PurchaseRequestLineitemService } from '../../purchase-request-lineitem/purchase-request-lineitem.service';
import {PurchaseRequestLineitem } from '../../purchase-request-lineitem/purchase-request-lineitem';
import { PurchaseRequest } from '../../purchase-request/purchase-request';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { CurrencyPipe } from '@angular/common';
import { SortPipe } from '../../utility/sort.pipe';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  purchaserequest: PurchaseRequest;

  title: string = "Purchase Request Lineitems for PR# ";

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

  review(): void {
    this.purchaserequest.Status="Review";
    this.purchaserequestsvc.change(this.purchaserequest)
      .subscribe(resp => {
        console.log(resp);
      this.router.navigateByUrl('/purchaserequests/list');
      });
  }

  constructor(
    private systemsrv: SystemService, 
    private router: Router, 
    private prlineitemsrv: PurchaseRequestLineitemService, 
    private route: ActivatedRoute, 
    private purchaserequestsvc: PurchaseRequestService) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);
  
    //grab the user id from the address bar  
    let id = this.route.snapshot.params.id;
    console.log("id=",id);

    //getting details for purchase request
    this.purchaserequestsvc.get(id)
    .subscribe(resp => {
      this.purchaserequest = resp.Data;
      console.log(resp);
    });
    }
  }