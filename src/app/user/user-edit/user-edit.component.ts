import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

title = 'app';

user: User;

  constructor(private usersvc: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

  		let id = this.route.snapshot.params.id;
		console.log("id=",id);

    	this.usersvc.get(id)
  			.subscribe(resp => {
  			this.user = resp.Data;
  			console.log(resp);
  		});
  }


}
