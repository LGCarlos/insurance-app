import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  CheckboxOptionsModel,
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

  //Return index of an element in
  public static getPassportIndexAtArray(
    passportNumber: string,
    arr: PassportModel[]
  ): number {
    const passportArray = arr.map((passportInfo) => passportInfo.name);
    return passportArray.indexOf(passportNumber);
  }

  //Return object with checkbox options
  public static getCurrentCheckboxValues(
    arr: CheckboxOptionsModel[]
  ): CheckboxOptionsModel[] {
    let keys: string[] = Object.keys(arr);
    let obj: CheckboxOptionsModel;
    let result: CheckboxOptionsModel[] = [];
    keys.forEach((insurance) => {
      obj = { name: insurance };
      result = [...result, obj];
    });
    return result;
  }

  //Return a date
  public static getEndDate(date: any) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let endDate = new Date(year + 1, month, day);
    return endDate;
  }
}
