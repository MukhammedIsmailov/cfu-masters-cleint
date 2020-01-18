import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenStorage {
    /**
     * Get access token
     * @returns {Observable<string>}
     */
    public getAccessToken(): Observable<string> {
        const token: string = <string>localStorage.getItem('accessToken');
        return of(token);
    }

    /**
     * Get user id
     * @returns {Observable<number>}
     */
    public getUserId(): Observable<number> {
        const userId: number = parseInt(localStorage.getItem('userId'));
        return of(userId);
    }

    /**
     * Get refer id
     * @returns {Observable<number>}
     */
    public getReferId(): Observable<string> {
        const referId: string = localStorage.getItem('referId');
        return of(referId);
    }

    /**
     * Set access token
     * @returns {TokenStorage}
     */
    public setAccessToken(token: string): TokenStorage {
        localStorage.setItem('accessToken', token);
        return this;
    }

    /**
     * Set user id
     * @returns {TokenStorage}
     */
    public setUserId(userId: number): TokenStorage {
        localStorage.setItem('userId', userId.toString());
        return this;
    }

    /**
     * Set refer id
     * @returns {TokenStorage}
     */
    public setReferId(referId: string): TokenStorage {
        localStorage.setItem('referId', referId);
        return this;
    }

    /**
     * Remove token and userId
     */
    public clear() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('referId');
    }

    public isAuthorized(): boolean {
        return !!localStorage.getItem('accessToken');
    }
}