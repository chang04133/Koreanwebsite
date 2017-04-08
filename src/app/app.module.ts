import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BodyComponent } from './body.component';

import { IntroductionComponent } from './introduction/introduction.component';
import { IntroSidebarComponent } from  './introduction/intro-sidebar.component';
import { IntroHeaderComponent } from  './introduction/intro-header.component';
import { IntroBodyComponent } from  './introduction/intro-body.component';
import { IntroFooterComponent } from  './introduction/intro-footer.component';

import { UserService } from './user.service';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, AppRoutingModule, HttpModule],
  declarations: [ AppComponent, SidebarComponent, HeaderComponent, FooterComponent, BodyComponent,
  								IntroductionComponent, IntroSidebarComponent, IntroHeaderComponent, IntroBodyComponent
  								,IntroFooterComponent],
  bootstrap:    [ AppComponent ],
  providers: 		[UserService ]

})
export class AppModule { }
