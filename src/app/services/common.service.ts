import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel, ClientsSearchRequestModel } from '../models/CommonModels';
import { ClientsApiService } from './api/clients-api.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private clientsApiService: ClientsApiService) {}

  getClients(body: ClientsSearchRequestModel = {}): Observable<ClientModel[]> {
    return new Observable((observer) => {
      this.clientsApiService.search(body).subscribe((res) => {
        observer.next(res);
      });
    });
  }
}
