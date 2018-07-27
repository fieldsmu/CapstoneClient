import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { JsonResponse} from '../../utility/json-response';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';
import { SortPipe } from '../../utility/sort.pipe';
import { SearchVendorPipe } from '../../utility/search-vendor.pipe';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

title = 'Vendor List';

vendors: Vendor[];

sortProperty: string = "Id";
sortOrder: string = "asc";

searchCriteria: string = '';

sort(sortBy: string): void {
  if(sortBy === this.sortProperty)
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  else {
    this.sortProperty = sortBy;
    this.sortOrder = 'asc';
  }
}


  constructor(private vendorsvc: VendorService,private systemsrv: SystemService, private router: Router) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  	this.vendorsvc.list()
  		.subscribe(resp => {
  			this.vendors = resp.Data;
  			console.log(resp);
  		});
  }

}



