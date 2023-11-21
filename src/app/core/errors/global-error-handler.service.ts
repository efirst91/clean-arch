import {ErrorHandler, inject, Injectable, NgZone} from '@angular/core';
import {NotificationsService} from "../../shared/services/notifications/notifications.service";
import {NotificationConf} from "../../shared/services/notifications/models/notification.interface";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  readonly zone = inject(NgZone);
  readonly notification = inject(NotificationsService);

  /**
   * Catch any error that is not cached in any component or interceptor
   * @param error error message
   * @override
   * @description If one error is cached here, it means that is an unhandled error and this wasn't
   * cached by any component or interceptor
   */
  handleError(error: any): void {
    this.zone.run(() => {
      const config: NotificationConf = {
        message: 'Unhandled error, please contact with support team',
        action: 'Cancel'
      }

      this.notification.showNotification(config)
      console.error('An unhandier error -> ', error)
    })
  }
}
