export class Vendor {

	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	Phone: string;
	Email: string;
	IsPreApproved: boolean;
	Active: boolean;

//making sure all the non-nullable fields are initialized to something
	constructor() {
		this.Id = 0;
		this.IsPreApproved = false;
		this.Active = true;
	}
}
