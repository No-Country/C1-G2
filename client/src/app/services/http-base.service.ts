import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(public http: HttpClient) { }

  httpGet(url: string): Observable<Object> {
    return this.http.get(`localhost:8080/api/${url}`);
  }

  httpPost(url: string, data: any, httpClientData?: any): Observable<Object> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.post(`localhost:8080/api/${url}`, data, httpClientData);
    }
    return this.http.post(`localhost:8080/api/${url}`, data);
  }

  httpPatch(url: string, data: any, httpClientData?: any): Observable<Object> {
    if (!_.isEmpty(httpClientData)) {
      return this.http.patch(`localhost:8080/api/${url}`, data, httpClientData);
    }
    return this.http.patch(`localhost:8080/api/${url}`, data);
  }
}
