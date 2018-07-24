import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-purchase-request-lineitem-list',
	templateUrl: './purchase-request-lineitem-list.component.html',
	styleUrls: ['./purchase-request-lineitem-list.component.css']
})
export class PurchaseRequestLineitemListComponent implements OnInit {

title: string = "Purchase Request Lineitem List";

	constructor(private systemsrv: SystemService, private router: Router) { }

	ngOnInit() {

		if(this.systemsrv.loggedInUser == null) {
			this.router.navigateByUrl('/users/login');
		}
		console.log("Logged-in user is: ",this.systemsrv.loggedInUser);
		
	}

}
