import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AuthResponse, Usuario } from "../interfaces/auth.interface";
import { HttpBaseService } from './http-base.service';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient, private httpBaseService: HttpBaseService) {}

  register(email: string, password: string) {
    const url = `api/pet_adoption/users`;

    const body = { email, password };

    return this.httpBaseService.httpPost(url, body).pipe(
      map((resp: any) => {
        if(resp.ok){
          localStorage.setItem('token', resp.token);
          return resp.ok;
        }
      })
    ).toPromise();
  }

  login(email: string, password: string) {
    const url = `api/pet_adoption/auth/login`;

    const body = { email, password };

    return this.httpBaseService.httpPost(url, body).pipe(
      map((resp: any) => {
        if(resp.ok){
          localStorage.setItem('token', resp.token);
          return resp.ok;
        }
      })
    ).toPromise();
  }

  validarToken(): Observable<boolean> {
    const url = `${environment.baseUrl}/api/pet_adoption/auth/renew`;

    // const headers = new HttpHeaders().set(
    //   "x-auth",
    //   localStorage.getItem("token") || ""
    // );

    return this.http.get<AuthResponse>(url).pipe(
      map((resp) => {
        localStorage.setItem("token", resp.token!);
        this._usuario = {
          name: resp.name!,
          uid: resp.uid!,
          email: resp.email!,
        };

        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }

  logout() {
    localStorage.removeItem("token");
  }
}
