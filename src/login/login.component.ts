import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app/app.service';
import { TokenStorage } from '../app/token-storage.service';
import { EmitterService } from "../app/emitter.service";

import { ILoginDTO, IResponseLoginDTO } from './login.model';


@Component({
    selector: 'cfu-login',
    providers: [],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor (private apiService: AppService, private router: Router, private tokenStorage: TokenStorage,
                 private emitterService: EmitterService) {}

    loginData: ILoginDTO = {
        email: null,
        password: null,
    };
    onError: boolean = false;
    onLoginError: boolean = false;


    onSubmit() {
        if(!this.loginData.email || !this.loginData.password) {
            this.onError = true;
        } else {
            this.onError = false;
            this.apiService.login(this.loginData).subscribe((response: IResponseLoginDTO) => {
                this.tokenStorage.setAccessToken(response.accessToken);
                this.emitterService.change();
                this.router.navigateByUrl('add-work');
            }, error => {
                this.onLoginError = true;
            });
        }
    }

}