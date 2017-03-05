import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent }  from './app.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule],
  declarations: [ AppComponent, SidebarComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
