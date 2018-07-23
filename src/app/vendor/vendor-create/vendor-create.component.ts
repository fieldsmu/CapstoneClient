import { Component, OnInit } from '@angular/core';
import { Vendor} from '../vendor';
import { VendorService } from '../vendor.service';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolPipe } from '../../utility/bool.pipe';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

pageTitle: string = "Vendor Create";

vendor: Vendor = new Vendor();

	create(): void {
		this.vendorsvc.create(this.vendor)
			.subscribe(resp => {
				this.vendor=resp.Data;
				console.log(resp);
				this.router.navigateByUrl('/vendors/list');
			}
	}

  constructor(private vendorsvc: VendorService, private router: Router, private Route: ActivatedRoute) { }

  ngOnInit() {
  }

}
