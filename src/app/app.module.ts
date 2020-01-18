import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { TokenStorage } from './token-storage.service'

const appRoutes: Routes =[

];

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes),
        ReactiveFormsModule, SimpleNotificationsModule.forRoot(), BrowserAnimationsModule, TokenStorage],
    declarations: [ ],
    bootstrap: [ AppComponent ],
    providers: [ AppService, { provide: APP_BASE_HREF, useValue : '/' } ]
})

export class AppModule { }