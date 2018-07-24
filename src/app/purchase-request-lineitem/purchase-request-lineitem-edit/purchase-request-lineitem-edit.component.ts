import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-purchase-request-lineitem-edit',
	templateUrl: './purchase-request-lineitem-edit.component.html',
	styleUrls: ['./purchase-request-lineitem-edit.component.css']
})
export class PurchaseRequestLineitemEditComponent implements OnInit {

	title: string = "Purchase Request Lineitem Edit"

	constructor(private systemsrv: SystemService, private router: Router) { }

	ngOnInit() {

		if(this.systemsrv.loggedInUser == null) {
			this.router.navigateByUrl('/users/login');
		}
		console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

	}

}
