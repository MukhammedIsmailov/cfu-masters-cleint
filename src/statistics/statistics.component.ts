import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app/app.service';

import { IStatisticsDTO } from './statistics.model';

@Component({
    selector: 'cfu-statistics',
    providers: [],
    templateUrl: './statistics.component.html',
})
export class StatisticsComponent implements OnInit{
    constructor (private apiService: AppService, private router: Router) {}

    statisticsData: IStatisticsDTO[];

    ngOnInit(): void {
        this.apiService.getStatistics().subscribe((data: IStatisticsDTO[]) => {
            this.statisticsData = data;
        });
    }
}