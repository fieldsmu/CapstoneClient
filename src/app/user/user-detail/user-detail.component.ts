import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	title = 'app';

	user: User;

	constructor(private usersvc: UserService) { }

	ngOnInit() {

		this.usersvc.list()
		.subscribe(resp => {
			this.user = resp.Data;
			console.log(resp);
		});
	}
}
