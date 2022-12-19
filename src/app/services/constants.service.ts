import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // Server Url API
  public static ServerUrl = 'https://api.example.com/';

  // Endpoints API
  public static Endpoints = {
    Search: 'search',
  };

  // Urls
  public static UrlsComponents = {
    Home: 'home',
  };
}
