import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public static UrlsComponents = {
    Home: 'home',
  };
}
