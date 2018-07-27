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
				vendor.Code.includes(searchFor) ||
				vendor.Name.includes(searchFor) ||
				vendor.Address.includes(searchFor) ||
				vendor.City.includes(searchFor) ||
				vendor.State.includes(searchFor) ||
				vendor.Zip.includes(searchFor) ||
				vendor.Phone.includes(searchFor) ||
				vendor.Email.includes(searchFor)
				) {
				srchVendors.push(vendor);
		}
	}
	return srchVendors;
}
}

