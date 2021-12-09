import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpBaseService } from './http-base.service';

import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: "root",
})

export class ContactService {

  constructor(private http: HttpClient, private httpBaseService: HttpBaseService) {}

  sendEmail(name: string, email: string, subject: string, message: string){
    const url = `pet_adoption/form`;

    const body = { name, email, subject, message};

    return this.httpBaseService.httpPost(url, body).pipe(map(resp => resp)).pipe(
      map((resp: any) => {
        if(resp.ok){
          localStorage.setItem('token', resp.token);
          return resp.ok;
        }
      })
    ).toPromise();
  };



  }







