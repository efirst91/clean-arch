import {inject, Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {NotificationConf} from "./models/notification.interface";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly  snackBar = inject(MatSnackBar);
  private readonly  snackConf = new MatSnackBarConfig();

  /**
   * Basic configuration
   * @param conf configuration object
   */
  showNotification(conf:NotificationConf):void {
    this.snackConf.horizontalPosition = conf.horizontalP ?? 'center';
    this.snackConf.verticalPosition = conf.verticalP ?? 'top';
    this.snackConf.duration = conf.duration ?? 2000;
    const message = conf.message ?? '';
    const action = conf.action ?? 'Cancel';

    this.snackBar.open(message, action, this.snackConf);
  }
}
