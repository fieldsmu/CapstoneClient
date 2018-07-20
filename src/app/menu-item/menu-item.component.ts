import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

	//the input below here allows the ngfor loop in menu.component.html to input information to this variable
	@Input() menu;

  constructor() { }

  ngOnInit() {
  }

}
