import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientModel, PassportModel } from '../models/CommonModels';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  primaryClientsResults: ClientModel[] = [];
  clientsResults: ClientModel[] = [];
  clientsSearchFilters: string = '';
  fullPassportsList: PassportModel[] = [];
  dialogForm?: FormGroup;
  minDateValue: any = '';

  constructor() {}
}
