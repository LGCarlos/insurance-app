import { Injectable } from '@angular/core';
import { Langs } from '../models/CommonModels';

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
  public static langs: Langs[] = [
    {
      code: 'en',
      description: 'English',
    },
    {
      code: 'es',
      description: 'Español',
    },
  ];
}
