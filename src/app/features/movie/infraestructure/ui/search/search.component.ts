import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Data, Search} from "../../../domain/models/data";
import {GetAllUseCase} from "../../../application/get-all.usecase";
import {NotificationsService} from "../../../../../shared/services/notifications/notifications.service";
import {LocalStorageService} from "../../../../../shared/services/local-storage/local-storage.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  providers: [
    GetAllUseCase
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private getAllUseCase = inject(GetAllUseCase);
  private notification = inject(NotificationsService);
  private localStorageService = inject(LocalStorageService);
  tokenControl = new FormControl('');
  data = signal<Data | null>(null);


  onSearch(): void {
    const search: Search = {
      query: 'pirates',
    }

    this.getAllUseCase.execute(search)
      .subscribe(
        {
          next: value => this.data.set(value),
          error: () => {
            this.notification.showNotification({
                message: 'Could not load all movie, please review the search value'
              }
            );
          }
        }
      )
  }

  onSetToken(): void {
    this.localStorageService.setToken(this.tokenControl?.value ?? '');
  }

}
