import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientModel, PassportModel } from '../models/CommonModels';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public primaryClientsResults: ClientModel[] = [];
  public clientsResults: ClientModel[] = [];
  public clientsSearchFilters: string = '';
  public fullPassportsList: PassportModel[] = [];
  public dialogForm?: FormGroup;
  public minDateValue: any = '';
  public toastType: '' | 'success' | 'error' | 'warn-noResults' = '';
  public labelsChart: string[] = [];

  constructor() {}
}
