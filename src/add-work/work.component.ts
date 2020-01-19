import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IWorkDTO } from './work.model';

import { AppService } from '../app/app.service';
import { TokenStorage } from '../app/token-storage.service';


@Component({
    selector: 'cfu-add_work',
    providers: [],
    templateUrl: './work.component.html',
})
export class WorkComponent {
    constructor (private apiService: AppService, private router: Router, private tokenStorage: TokenStorage) {}

    workData: IWorkDTO = {
        introduction: null,
        actuals: null,
        aimsAndTasks: null,
        conclusions: null,
        keyWords: [],
        keyWordsRaw: null,
        mainPart: null,
        overview: null,
        programImplementation: null,
        sources: [],
        sourcesRaw: null,
    };

    onSubmit() {
        const separator = ';';
        const keywords = !!this.workData.keyWordsRaw ? this.workData.keyWordsRaw.split(separator) : [];
        const sources = !!this.workData.sourcesRaw ? this.workData.sourcesRaw.split(separator) : [];
        this.workData.keyWordsRaw = undefined;
        this.workData.sourcesRaw = undefined;

        this.workData.keyWords = keywords.map((key) => {
            console.log(key)
            return { title: key };
        });

        this.workData.sources = sources.map((s) => {
            return { link: s };
        });

        this.apiService.addWork(this.workData).subscribe(() => {

        });
    }
}