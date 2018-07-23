import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

title = 'app';

user: User;

change(): void {
	this.usersvc.change(this.user)
		.subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/users/list');
      });
}

  constructor(private usersvc: UserService, private route: ActivatedRoute, private router: Router) { }

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
