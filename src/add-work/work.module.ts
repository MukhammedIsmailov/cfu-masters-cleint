import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { WorkComponent } from './work.component';
import { SimpleNotificationsModule} from "angular2-notifications";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule, SimpleNotificationsModule.forRoot() ],
    declarations: [ WorkComponent ],
    providers: []
})

export class WorkModule { }