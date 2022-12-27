import { Injectable } from '@angular/core';
import { ClientModel, PassportModel } from '../models/CommonModels';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  primaryClientsResults: ClientModel[] = [];
  clientsResults: ClientModel[] = [];
  clientsSearchFilters: string = '';
  fullPassportsList: PassportModel[] = [];

  constructor() {}
}
