import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';

import { PurchaseRequestLineitem } from '../purchase-request-lineitem';
import { PurchaseRequestLineitemService } from '../purchase-request-lineitem.service';

@Component({
  selector: 'app-purchase-request-lineitem-detail',
  templateUrl: './purchase-request-lineitem-detail.component.html',
  styleUrls: ['./purchase-request-lineitem-detail.component.css']
})
export class PurchaseRequestLineitemDetailComponent implements OnInit {

  title: string = "Purchase Request Lineitem Detail";
  purchaserequestlineitem: PurchaseRequestLineitem;

deleteConfirmed
  remove() {
    this.deleteConfirmed=true;
  }

  confirmed() {
    let id = this.purchaserequestlineitem.PurchaseRequestId
    this.purchaserequestlineitemsvc.remove(this.purchaserequestlineitem)
    .subscribe (resp => {
      console.log("prli removed: ", resp)
      this.router.navigateByUrl('/purchaserequests/lineitems/'+id);
    });
  }

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private systemsvc: SystemService,
    private purchaserequestlineitemsvc: PurchaseRequestLineitemService
    ) { }

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

}
