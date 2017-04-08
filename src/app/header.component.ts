import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-header',
  templateUrl: 'app/header.component.html',
  styleUrls: ['app/header.component.css']
})
export class HeaderComponent  {
	private register: boolean;
	private tabs : string[];
	constructor(private userService: UserService) {
				this.tabs = ["Introduction", "Product Information", "Research and Dev.", "Quality Assurance",
				"Machines Information", "Administration Support"]
	}


	login(form: any, event: any){
		event.preventDefault();
		if(this.register){
			this.userService.register(form.controls.user.value, form.controls.pass.value);
		} else {
			var newUser = this.userService.login(form.controls.user.value, form.controls.pass.value); 
			console.log(newUser);
		}
		this.register = false;
		return false;
	}


	 
}
