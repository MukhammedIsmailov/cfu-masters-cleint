import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWorkDTO } from './work-detail.model';

import { AppService } from '../app/app.service';
import { TokenStorage } from '../app/token-storage.service';
import { NotificationService } from '../app/notification.service';


@Component({
    selector: 'cfu-work',
    providers: [],
    templateUrl: './work-detail.component.html',
})
export class WorkDetailComponent implements OnInit{
    constructor (private apiService: AppService, private router: Router, private tokenStorage: TokenStorage,
                 private notificationService: NotificationService, private aRouter: ActivatedRoute) {}

    workData: IWorkDTO;

    ngOnInit(): void {
        let id: number = null;
        this.aRouter.queryParams.subscribe(params => {
            id = parseInt(params.id);
            this.apiService.getWork(id).subscribe((data: IWorkDTO) => {
                this.workData = data;
            });
        });
    }
}