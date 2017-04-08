import { Component } from '@angular/core';


@Component({
  selector: 'intro-header',
  templateUrl: 'app/introduction/intro-header.component.html',
  styleUrls: ['app/introduction/intro-header.component.css']
  
})
export class IntroHeaderComponent  {
	private tabs : string[];
	constructor() {
				this.tabs = ["Introduction", "Product Information", "Research and Dev.", "Quality Assurance",
				"Machines Information", "Administration Support"]
	}

	 
}
