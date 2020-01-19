import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from "./token-storage.service";

@Component({
    selector: 'cfu-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor (private router: Router, private tokenStorage: TokenStorage) {
    }

    authorized = this.tokenStorage.isAuthorized();

    signIn() {
        this.router.navigateByUrl('sign-in');
    }

    signUp() {
        this.router.navigateByUrl('sign-up');
    }

    addWork() {
        this.router.navigateByUrl('add-work');
    }

    findByKW() {
        this.router.navigateByUrl('find-by-keyword');
    }

    findByS() {
        this.router.navigateByUrl('find-by-source');
    }

    findByT() {
        this.router.navigateByUrl('find-by-text');
    }

    logout() {
        this.tokenStorage.clear();
        this.router.navigateByUrl('sign-in');
        this.authorized = false;
    }
}
