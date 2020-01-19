import { Component, OnInit } from '@angular/core';

import { ILoginDTO } from './login.model';

@Component({
    selector: 'cfu-login',
    providers: [],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    loginData: ILoginDTO = {
        email: null,
        password: null,
    };
    onError: boolean = false;

    onSubmit() {
        if(!this.loginData.email || !this.loginData.password) {
            this.onError = true;
        } else {
            this.onError = false;
        }
    }

}