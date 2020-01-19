import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { RegistrationComponent } from  './registration.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ RegistrationComponent ],
})

export class RegistrationModule { }