import { Vendor } from '../vendor/vendor';

export class Product {

	Id: number;
	PartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	Active: boolean;
	VendorId: number;
	Vendor: Vendor;
	VendorName: string="";

	constructor() {
		this.Id = 0;
		this.Active = false;
		this.PhotoPath="N/A";

	}
}