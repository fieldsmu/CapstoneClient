import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})



export class UserListComponent implements OnInit {

title = 'app';

users: User[];

  constructor(private usersvc: UserService) { }

  ngOnInit() {
  	this.usersvc.list()
  		.subscribe(resp => {
  			this.users = resp.Data;
  			console.log(resp);
  		});
  }

}
