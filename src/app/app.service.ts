import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenStorage } from './token-storage.service';
import * as config  from '../../config.json';

@Injectable()
export class AppService {
    constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }

    private _options = { };

    // private setOptions() {
    //     this.tokenStorage.getAccessToken().subscribe((token: string) => {
    //         this._options = {
    //             headers: new HttpHeaders({
    //                 'Authorization': `Bearer ${token}`,
    //             }),
    //         }
    //     });
    // }
}
