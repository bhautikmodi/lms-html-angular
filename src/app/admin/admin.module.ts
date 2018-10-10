import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterLearnerComponent } from './register-learner/register-learner.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { EditProfileLearnerComponent } from './edit-profile-learner/edit-profile-learner.component';
import { EditProfileAdminComponent } from './edit-profile-admin/edit-profile-admin.component';
import { EditProfileInstructorComponent } from './edit-profile-instructor/edit-profile-instructor.component';

import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { HeaderRegisterComponent } from './header-register/header-register.component';
import { FooterRegisterComponent } from './footer-register/footer-register.component';


@NgModule({
  declarations: [
    AdminComponent,
	HeaderComponent,
	FooterComponent,
	SidebarComponent,
    DashboardComponent,
	UserListComponent,
	CalendarComponent,
	CertificateComponent,
	CourseDetailComponent,
	RegisterInstructorComponent,
    RegisterLearnerComponent,
    RegisterAdminComponent,
	HeaderRegisterComponent,
    FooterRegisterComponent,
	LinkListComponent,
	LoginComponent,
	ForgotPasswordComponent,
	EditProfileLearnerComponent,
	EditProfileAdminComponent,
    EditProfileInstructorComponent
    
  ],
  imports: [
	//BrowserModule,
	CommonModule,
	HttpModule,
	  FormsModule,
	  AdminRoutingModule
  ]  
})
export class AdminModule { }
