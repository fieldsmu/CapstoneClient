import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';
import { PurchaseRequestLineitem } from '../purchase-request-lineitem';
import { PurchaseRequestLineitemService} from '../purchase-request-lineitem.service';
import { SortPipe } from '../../utility/sort.pipe';

@Component({
	selector: 'app-purchase-request-lineitem-list',
	templateUrl: './purchase-request-lineitem-list.component.html',
	styleUrls: ['./purchase-request-lineitem-list.component.css']
})
export class PurchaseRequestLineitemListComponent implements OnInit {

	purchaserequestlineitems: PurchaseRequestLineitem[];

	title: string = "Purchase Request Lineitem List";

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
		});

	}

}
