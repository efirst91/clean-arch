import {MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

export interface NotificationConf {
  message: string;
  action?: string;
  duration?: number;
  horizontalP?: MatSnackBarHorizontalPosition;
  verticalP?: MatSnackBarVerticalPosition;
}
