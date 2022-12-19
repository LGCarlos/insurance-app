import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  ClientModel,
  ClientsSearchRequestModel,
} from 'src/app/models/CommonModels';
import { ConstantsService } from '../constants.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsApiService {
  serverUrl!: string;
  constructor(private http: HttpClient) {
    this.serverUrl = ConstantsService.ServerUrl;
  }

  search(body: ClientsSearchRequestModel): Observable<ClientModel[]> {
    let url = `${this.serverUrl}${ConstantsService.Endpoints.Search}`;
    return from(this.http.post<ClientModel[]>(url, body).toPromise());
  }
}
