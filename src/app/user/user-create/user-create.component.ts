import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {JsonResponse} from '../../utility/json-response';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolPipe } from '../../utility/bool.pipe';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

pageTitle: String = 'User Create';

user: User = new User()	;

create(): void {
  	this.usersvc.create(this.user)
		.subscribe(resp => {
			this.user = resp.Data;
			console.log(resp);
			this.router.navigateByUrl('/users/list');
		});
}

  constructor(private usersvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

}
