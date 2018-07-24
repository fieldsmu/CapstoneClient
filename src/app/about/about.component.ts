import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

title: string = "About";

  constructor(private router: Router, private systemsrv: SystemService) { }

  ngOnInit() {
    
    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);
  }

}
