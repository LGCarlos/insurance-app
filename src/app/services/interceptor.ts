import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If it is a non-productive environment, mocks are checked.
    if (isDevMode() && UtilsService.isLocalhost()) {
      // Search
      if (req.method === 'POST' && req.url.includes('search')) {
        return this.getMock('clients-search-response');
      }
    }
    return next.handle(req);
  }
  getMock(filename?: string): Observable<HttpEvent<any>> {
    let body = undefined;
    let delayMs = 300;
    body = filename
      ? this.http.get<any>(`assets/mocks/${filename}.json`).toPromise()
      : undefined;
    return of(new HttpResponse({ status: 200, body: body })).pipe(
      delay(delayMs)
    );
  }
}
