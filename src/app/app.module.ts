import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { RegistrationComponent } from '../registartion/registration.component';
import { LoginComponent } from '../login/login.component';
import { WorkComponent } from '../add-work/work.component';
import { FindByKeywordComponent } from '../find-by-keyword/find-by-keyword.component';

import { AppService } from './app.service';
import { TokenStorage } from  './token-storage.service';

const appRoutes: Routes =[
    { path: 'sign-up', component: RegistrationComponent, },
    { path: 'sign-in', component: LoginComponent, },
    { path: 'add-work', component: WorkComponent },
    { path: 'find-by-keyword', component: FindByKeywordComponent },
];

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
    declarations: [ AppComponent, RegistrationComponent, LoginComponent, WorkComponent, FindByKeywordComponent ],
    bootstrap: [ AppComponent ],
    providers: [ AppService, { provide: APP_BASE_HREF, useValue : '/' }, TokenStorage ]
})

export class AppModule { }