import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  // Event for showing a toast message.
  public toastVisibilityChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  constructor() {}

  // Trigger toast
  public showToast(): void {
    this.toastVisibilityChange.emit(true);
  }
}
