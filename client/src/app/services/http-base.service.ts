import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(public http: HttpClient) { }

  httpGet(url: string, headers?: HttpHeaders): Observable<Object> {
    return this.http.get(`${environment.baseUrl}/${url}`);
  }

  httpPost(url: string, data: any, httpClientData?: any): Observable<Object> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.post(`${environment.baseUrl}/${url}`, data, httpClientData);
    }
    return this.http.post(`${environment.baseUrl}/${url}`, data);
  }

  httpPatch(url: string, data: any, httpClientData?: any): Observable<Object> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.patch(`${environment.baseUrl}/${url}`, data, httpClientData);
    }
    return this.http.patch(`${environment.baseUrl}/${url}`, data);
  }
}
