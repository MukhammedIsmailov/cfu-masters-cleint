import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenStorage } from './token-storage.service';
import * as config  from '../../config.json';

@Injectable()
export class AppService {
    constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }

    private _options = { };

    private setOptions() {
        this.tokenStorage.getAccessToken().subscribe((token: string) => {
            this._options = {
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${token}`,
                }),
            }
        });
    }

    registration (data: any) {
        return this.http.post(`${config.apiBaseUrl}/auth/registration`, data);
    }

    login (data: any) {
        return this.http.post(`${config.apiBaseUrl}/auth/login`, data);
    }

    addWork (data: any) {
        this.setOptions();
        return this.http.post(`${config.apiBaseUrl}/works`, data, this._options);
    }

    findByKeyword (keyword: string) {
        this.setOptions();
        return this.http.get(`${config.apiBaseUrl}/works/findByKeyword?keyword=${keyword}`, this._options);
    }

    findBySource (source: string) {
        this.setOptions();
        return this.http.get(`${config.apiBaseUrl}/works/findBySource?source=${source}`, this._options);
    }

    findByWord (word: string) {
        this.setOptions();
        return this.http.get(`${config.apiBaseUrl}/works/findByText?text=${encodeURIComponent(word)}`, this._options);
    }

    getWork (id: number) {
        this.setOptions();
        return this.http.get(`${config.apiBaseUrl}/works/${id}`, this._options);
    }

    getStatistics () {
        this.setOptions();
        return this.http.get(`${config.apiBaseUrl}/user/statistic`, this._options);
    }
}
