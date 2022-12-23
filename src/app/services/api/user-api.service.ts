import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserModel, UserSearchRequestModel } from 'src/app/models/CommonModels';
import { ConstantsService } from '../constants.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  serverUrl!: string;
  constructor(private http: HttpClient) {
    this.serverUrl = ConstantsService.ServerUrl;
  }
  search(body: UserSearchRequestModel): Observable<UserModel> {
    let url = `${this.serverUrl}${ConstantsService.Endpoints.User}`;
    return from(this.http.post<UserModel>(url, body).toPromise());
  }
}
