import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ClientsApiService } from './clients-api.service';

describe('ClientsApiService', () => {
  let service: ClientsApiService;

  const spyHttpClient = jasmine.createSpyObj<HttpClient>('HttpClient', [
    'post',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spyHttpClient }],
    });
    service = TestBed.inject(ClientsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
