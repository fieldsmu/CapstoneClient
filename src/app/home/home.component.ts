import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title: string = "Purchase Request System";

  constructor(private router: Router, private systemsrv: SystemService) { }

  ngOnInit() {
    
    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);
  }

}
