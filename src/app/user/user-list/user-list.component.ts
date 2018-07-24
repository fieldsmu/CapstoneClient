import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { JsonResponse } from '../../utility/json-response';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  title = 'User List';

  users: User[];

  constructor(private usersvc: UserService, private systemsrv: SystemService, private router: Router) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

    this.usersvc.list()
    .subscribe(resp => {
      this.users = resp.Data;
      console.log(resp);
    });
  }
}
