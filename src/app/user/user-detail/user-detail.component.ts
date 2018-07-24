import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';



@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	title = 'User Detail';

	user: User;

	deleteConfirmed: boolean = false;

	remove(): void {
		this.deleteConfirmed = true;
	}

	confirmed (){
		this.usersvc.remove(this.user)
			.subscribe(resp => {
				console.log("User removed: ", resp);	
				this.router.navigateByUrl('/users/list');
			});
	}

	constructor(private usersvc: UserService, private route: ActivatedRoute, private router: Router, private systemsrv: SystemService) { }


	ngOnInit() {
		
    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

		let id = this.route.snapshot.params.id;
		console.log("id=",id);

		this.usersvc.get(id)
		.subscribe(resp => {
			this.user = resp.Data;
			console.log(resp);
		});
	}
}
