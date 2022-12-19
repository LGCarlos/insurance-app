import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  // Check if browser is running in localhost
  public static isLocalhost(): boolean {
    return (
      location.href.startsWith('http://localhost:') ||
      location.href.startsWith('http://127.0.0.1:')
    );
  }
}
