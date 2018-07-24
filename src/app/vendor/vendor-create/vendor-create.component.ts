import { Component, OnInit } from '@angular/core';
import { Vendor} from '../vendor';
import { VendorService } from '../vendor.service';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolPipe } from '../../utility/bool.pipe';
import { SystemService } from '../../system/system.service';

@Component({
	selector: 'app-vendor-create',
	templateUrl: './vendor-create.component.html',
	styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

	title: string = "Vendor Create";

	vendor: Vendor = new Vendor();

	create(): void {
		this.vendorsvc.create(this.vendor)
		.subscribe(resp => {
			this.vendor=resp.Data;
			console.log(resp);
			this.router.navigateByUrl('/vendors/list');
		}
	}

	constructor(private vendorsvc: VendorService, private router: Router, private Route: ActivatedRoute, private systemsrv: SystemService) { }

	ngOnInit() {

		if(this.systemsrv.loggedInUser == null) {
			this.router.navigateByUrl('/users/login');
		}
		console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

	}

}



