export class User {

	Id: number;
	Username: string;
	Password: string;
	Firstname: string;
	Lastname: string;
	Phone: string;
	Email: string;
	IsReviewer: boolean;
	IsAdmin: boolean;
	Active: boolean;

//making sure all the non-nullable fields are initialized to something
	constructor() {
		this.Id = 0;
		this.IsReviewer = false;
		this.IsAdmin = false;
		this.Active = true;
	}
}