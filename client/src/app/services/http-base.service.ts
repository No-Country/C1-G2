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

  httpGet(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get(`${environment.baseUrl}${url}`);
  }

  httpDelete(url: string, data: any): Observable<any> {
    return this.http.delete(`${environment.baseUrl}${url}`, data);
  }

  httpPost(url: string, data: any, httpClientData?: any): Observable<any> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.post(`${environment.baseUrl}${url}`, data, httpClientData);
    }

    return this.http.post(`${environment.baseUrl}${url}`, data);
  }

  httpPut(url: string, data: any, httpClientData?: any): Observable<any> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.put(`${environment.baseUrl}${url}`, data, httpClientData);
    }

    return this.http.put(`${environment.baseUrl}${url}`, data);
  }
}
