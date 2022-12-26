import { Injectable } from '@angular/core';
import { ClientModel } from '../models/CommonModels';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  clientsResults: ClientModel[] = [];
  clientsSearchFilters: string = '';

  constructor() {}
}
