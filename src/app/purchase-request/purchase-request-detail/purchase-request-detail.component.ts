import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router'
import { PurchaseRequest } from '../purchase-request';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  title:string="Purchase Request Detail";

  purchaserequest: PurchaseRequest;

  deleteConfirmed: boolean = false;

  remove(): void {
    this.deleteConfirmed = true;
  }

  confirmed(): void {
     this.purchaserequestsvc.remove(this.purchaserequest)
       .subscribe(resp => {
         console.log("PR removed: ", resp);
         this.router.navigateByUrl('/purchaserequests/list');
       });
  }

  constructor(private systemsrv: SystemService, private router: Router, private route: ActivatedRoute, private purchaserequestsvc: PurchaseRequestService) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

    let id = this.route.snapshot.params.id;
    console.log("id=",id);

    this.purchaserequestsvc.get(id)
    .subscribe(resp => {
      this.purchaserequest = resp.Data;
      console.log(resp);
    });


  }

}
