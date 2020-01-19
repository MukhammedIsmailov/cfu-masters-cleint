import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationService {
    constructor(private notificationsService: NotificationsService) {
    }

    private options = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        theClass: 'notification'
    };

    error (title: string, content: string): void {
        this.notificationsService.error(title, content, this.options);
    }

    success (title: string, content: string): void {
        this.notificationsService.success(title, content, this.options);
    }
}
