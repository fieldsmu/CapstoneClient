import { Component, OnInit } from '@angular/core';
import {  Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import {JsonResponse} from '../../utility/json-response';
import { SystemService } from '../../system/system.service';


@Component({
	selector: 'app-vendor-detail',
	templateUrl: './vendor-detail.component.html',
	styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent implements OnInit {

	title: String = "Vendor Details";

	vendor: Vendor;

	deleteConfirmed: boolean = false;

	remove(): void {
		this.deleteConfirmed = true;
	}

	confirmed (): void {
		this.vendorsvc.remove(this.vendor)
		.subscribe(resp => {
			console.log("Vendor removed: ", resp);	
			this.router.navigateByUrl('/vendors/list');
		});
	}


	constructor(private vendorsvc: VendorService, private route: ActivatedRoute, private router: Router, private systemsrv: SystemService) { }

	ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

		let id = this.route.snapshot.params.id;
		console.log("id=",id);

		this.vendorsvc.get(id)
		.subscribe (resp => {
			this.vendor = resp.Data;
			console.log(resp);
		});

	}
}


