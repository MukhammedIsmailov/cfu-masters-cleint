import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from "./token-storage.service";
import { EmitterService } from "./emitter.service";

@Component({
    selector: 'cfu-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
    constructor (private router: Router, private tokenStorage: TokenStorage, private emitterService: EmitterService) {
    }

    authorized: boolean = false;

    ngOnInit(): void {
        this.authorized = this.tokenStorage.isAuthorized();

        this.emitterService.getEmittedValue().subscribe((data: any) => {
            this.authorized = true;
        });
    }

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
    statistics() {
        this.router.navigateByUrl('statistics');
    }

    logout() {
        this.tokenStorage.clear();
        this.router.navigateByUrl('sign-in');
        this.authorized = false;
    }
}
