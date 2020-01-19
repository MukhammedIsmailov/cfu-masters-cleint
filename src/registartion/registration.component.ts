import { Component, OnInit } from '@angular/core';

import { IRegistrationDTO } from './registration.model';

@Component({
    selector: 'cfu-registration',
    providers: [],
    templateUrl: './registration.component.html',
})
export class RegistrationComponent {
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
        console.log(!this.registrationData.lastName)
        if(!this.registrationData.lastName || !this.registrationData.firstName || !this.registrationData.email ||
            !this.registrationData.specialty || !this.registrationData.scientificDirector ||
            !this.registrationData.password || !this.registrationData.graduationTheme ||
            !this.registrationData.department) {
            this.onError = true;
        } else {
            this.onError = false;
        }
    }

}