import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

	title: string = "Login";
	user: User = new User();
	message: string = "";
	showFailed: boolean = false;

	login(): void {
		this.systemsvc.clearLoggedInUser();

		this.usersvc.authenticate("user","1")	//(this.user.Username, this.user.Password)
		.subscribe(resp => {
			console.log(resp);
			if(resp.Code == -2) {
				console.error("Login failed.");
				this.message = resp.Message;
				this.showFailed = true;
				return;
			} else {
				this.systemsvc.setLoggedInUser(resp.Data);
				this.router.navigateByUrl('/home');
			}
		});
	}

	constructor(private router: Router, private systemsvc: SystemService, private usersvc: UserService ) { }

	ngOnInit() { }
}
