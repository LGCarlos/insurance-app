import { Injectable } from '@angular/core';
import {
  ClientModel,
  ClientTableDataModel,
  PassportModel,
} from '../models/CommonModels';

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

  //Return index of an element in
  public static getIndexAtArray(
    element: ClientModel,
    arr: ClientTableDataModel[]
  ): number {
    return arr.indexOf(element);
  }

  public static getPassportIndexAtArray(
    passportNumber: string,
    arr: PassportModel[]
  ): number {
    const passportArray = arr.map((passportInfo) => passportInfo.name);
    return passportArray.indexOf(passportNumber);
  }
}
