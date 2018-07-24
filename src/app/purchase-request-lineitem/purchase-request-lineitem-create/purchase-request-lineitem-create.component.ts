import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-request-lineitem-create',
  templateUrl: './purchase-request-lineitem-create.component.html',
  styleUrls: ['./purchase-request-lineitem-create.component.css']
})
export class PurchaseRequestLineitemCreateComponent implements OnInit {

title: string = "Purchase Request Lineitem Create";

  constructor(private systemsrv: SystemService, private router: Router) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  }

}
