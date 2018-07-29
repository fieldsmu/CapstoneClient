import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor';

@Pipe({
	name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

	transform(vendors:Vendor[],searchFor:string): any {
		let srchVendors: Vendor[] = [];
		for (let vendor of vendors) {
			if (
				vendor.Id.toString().includes(searchFor) ||
				vendor.Code.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.Name.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.Address.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.City.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.State.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.Zip.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.Phone.toUpperCase().includes(searchFor.toUpperCase()) ||
				vendor.Email.toUpperCase().includes(searchFor.toUpperCase())
				) {
				srchVendors.push(vendor);
		}
	}
	return srchVendors;
}
}

