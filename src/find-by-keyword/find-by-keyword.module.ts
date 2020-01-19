import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { FindByKeywordComponent } from './find-by-keyword.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ FindByKeywordComponent ],
})

export class FindByKeywordModule { }