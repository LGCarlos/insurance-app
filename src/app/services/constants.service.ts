import { Injectable } from '@angular/core';
import { InsuranceCard, Langs } from '../models/CommonModels';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // Social media urls
  public static GitHub: string = 'https://github.com/LGCarlos/';
  public static Linkedin: string =
    'https://www.linkedin.com/in/carlos-js-lopez';

  // Server Url API
  public static ServerUrl: string = 'https://api.example.com/';

  // Endpoints API
  public static Endpoints = {
    Search: 'search',
    User: 'user',
  };

  // Urls
  public static UrlsComponents = {
    Home: 'home',
    Results: 'results',
    Statistsics: 'statistics',
  };

  // Mock Token
  public static Token: string = 'ae45kgtiy986OHJUer';

  // Images path
  public static imagesPath: string = '/assets/images/';

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

  // Insurance Types Cards
  public static insurances: InsuranceCard[] = [
    {
      background: 'blue',
      type: 'car',
    },
    {
      background: 'green',
      type: 'healthCare',
    },
    {
      background: 'yellow',
      type: 'work',
    },
    {
      background: 'purple',
      type: 'home',
    },
  ];

  // Number of rows
  public static TableRowsNumber: number = 10;

  // Title 'insurance'
  public static insuranceString: string = 'insurance';
}
