import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app/app.service';

import { IRegistrationDTO } from './registration.model';

@Component({
    selector: 'cfu-registration',
    providers: [],
    templateUrl: './registration.component.html',
})
export class RegistrationComponent {

    constructor (private apiService: AppService, private router: Router) {}

    registrationData: IRegistrationDTO = {
        lastName: null,
        firstName: null,
        department: null,
        email: null,
        graduationTheme: null,
        password: null,
        scientificDirector: null,
        specialty: null,
    };
    onError: boolean = false;

    onSubmit() {
        console.log(!this.registrationData.lastName, !this.registrationData.firstName, !this.registrationData.email,
            !this.registrationData.specialty, !this.registrationData.scientificDirector,
            !this.registrationData.password, !this.registrationData.graduationTheme,
            !this.registrationData.department)
        if(!this.registrationData.lastName || !this.registrationData.firstName || !this.registrationData.email ||
            !this.registrationData.specialty || !this.registrationData.scientificDirector ||
            !this.registrationData.password || !this.registrationData.graduationTheme ||
            !this.registrationData.department) {
            this.onError = true;
        } else {
            this.onError = false;
            this.apiService.registration(this.registrationData).subscribe(response => {
                this.router.navigateByUrl('/sign-in')
            })
        }
    }

}