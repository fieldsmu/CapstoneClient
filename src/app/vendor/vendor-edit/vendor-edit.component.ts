import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { JsonResponse } from '../../utility/json-response';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

title: string = "Vendor Edit";

vendor: Vendor;

change(): void {
	this.vendorsvc.change(this.vendor)
		.subscribe (resp => {
			console.log(resp);
        	this.router.navigateByUrl('/vendors/list');

		});
}

  constructor(private vendorsvc: VendorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
	let id = this.route.snapshot.params.id;
	console.log("id=",id);

	this.vendorsvc.get(id)
			.subscribe(resp => {
			this.vendor = resp.Data;
			console.log(resp);
		});

  }

}
