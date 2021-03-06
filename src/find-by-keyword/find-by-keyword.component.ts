import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AppService } from '../app/app.service';
import { TokenStorage } from '../app/token-storage.service';

import { IWorkDTO } from './find-by-keyword.model';

@Component({
    selector: 'cfu-find-by-keyword',
    providers: [],
    templateUrl: './find-by-keyword.component.html',
})
export class FindByKeywordComponent implements OnInit {
    searchChangedSubject: Subject<string> = new Subject<string>();

    workData: IWorkDTO[];

    constructor (private apiService: AppService, private router: Router, private tokenStorage: TokenStorage) {}

    ngOnInit(): void {
        this.searchChangedSubject
            .pipe(debounceTime(500), distinctUntilChanged())
            .subscribe((searchQuery: string) => {
                this.apiService.findByKeyword(searchQuery).subscribe((data: IWorkDTO[]) => {
                    this.workData = data;
                })
            });
    }

    searchChanged(searchQueryEvent: any): void {
        this.searchChangedSubject.next(searchQueryEvent.target.value);
    }


    getWork(id: number) {
        this.router.navigateByUrl(`work?id=${id}`);
    }
}