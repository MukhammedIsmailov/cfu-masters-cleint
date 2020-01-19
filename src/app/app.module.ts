import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { RegistrationComponent } from '../registartion/registration.component';
import { LoginComponent } from '../login/login.component';
import { WorkComponent } from '../add-work/work.component';
import { FindByKeywordComponent } from '../find-by-keyword/find-by-keyword.component';
import { FindBySourceComponent } from '../find-by-source/find-by-source.component';
import { FindByWordComponent } from '../find-by-word/find-by-word.component';
import { WorkDetailComponent } from '../work-detail/work-detail.component';

import { AppService } from './app.service';
import { TokenStorage } from  './token-storage.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationService } from './notification.service';
import {EmitterService} from "./emitter.service";

const appRoutes: Routes =[
    { path: 'sign-up', component: RegistrationComponent, },
    { path: 'sign-in', component: LoginComponent, },
    { path: 'add-work', component: WorkComponent },
    { path: 'find-by-keyword', component: FindByKeywordComponent },
    { path: 'find-by-source', component: FindBySourceComponent },
    { path: 'find-by-text', component: FindByWordComponent },
    { path: 'work', component: WorkDetailComponent },
];

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(), BrowserAnimationsModule],
    declarations: [ AppComponent, RegistrationComponent, LoginComponent, WorkComponent, FindByKeywordComponent,
        FindBySourceComponent, FindByWordComponent, WorkDetailComponent],
    bootstrap: [ AppComponent ],
    providers: [ AppService, { provide: APP_BASE_HREF, useValue : '/' }, TokenStorage, NotificationService, EmitterService ]
})

export class AppModule { }