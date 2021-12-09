import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpBaseService } from './http-base.service';


@Injectable({
  providedIn: "root",
})

export class ContactService {

  constructor(private http: HttpClient, private httpBaseService: HttpBaseService) {}

  sendEmail(name: string, email: string, subject: string, message: string){
    const url = `pet_adoption/form`;

    const body = { name, email, subject, message};

    return this.httpBaseService.httpPost(url, body);



  }




}


