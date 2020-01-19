import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AppService } from '../app/app.service';
import { TokenStorage } from '../app/token-storage.service';

import { IWorkDTO } from './find-by-source.model';

@Component({
    selector: 'cfu-find-by-keyword',
    providers: [],
    templateUrl: './find-by-source.component.html',
})
export class FindBySourceComponent implements OnInit {
    searchChangedSubject: Subject<string> = new Subject<string>();

    workData: IWorkDTO[];

    constructor (private apiService: AppService, private router: Router, private tokenStorage: TokenStorage) {}

    ngOnInit(): void {
        this.searchChangedSubject
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe((searchQuery: string) => {
                this.apiService.findBySource(searchQuery).subscribe((data: IWorkDTO[]) => {
                    this.workData = data;
                })
            });
    }

    searchChanged(searchQueryEvent: any): void {
        this.searchChangedSubject.next(searchQueryEvent.target.value);
    }
}