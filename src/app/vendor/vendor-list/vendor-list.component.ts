import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import {JsonResponse} from '../../utility/json-response';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

title = 'Vendor List';

vendors: Vendor[];

  constructor(private vendorsvc: VendorService) { }

  ngOnInit() {
  	this.vendorsvc.list()
  		.subscribe(resp => {
  			this.vendors = resp.Data;
  			console.log(resp);
  		});
  }

}