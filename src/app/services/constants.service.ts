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
    User: 'user',
  };

  // Urls
  public static UrlsComponents = {
    Home: 'home',
  };

  // Mock Token
  public static Token = 'ae45kgtiy986OHJUer';

  // Images path
  public static imagesPath = './../../../assets/images/';

  // Languages
  public static langs = {
    en: 'English',
    es: 'Castellano',
  };
}
