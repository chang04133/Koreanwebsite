import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: 'app/header.component.html',
  styleUrls: ['app/header.component.css']
})
export class HeaderComponent  {
	private tabs = ["TAB1", "TAB2", "TAB3"];

	constructor() {
				this.tabs = ["TAB1", "TAB2", "TAB3"]
	}

	 
}
