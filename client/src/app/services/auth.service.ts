import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { AuthResponse, Usuario } from "../interfaces/auth.interface";
import { HttpBaseService } from './http-base.service';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient, private httpBaseService: HttpBaseService) {}

  registro(email: string, password: string) {
    const body = { email, password };

    return this.httpBaseService.httpPost('auth/new', body);
  }


  login(email: string, password: string) {
    const body = { email, password };

    return this.http.post<AuthResponse>('pet_adoption/auth/login', body).pipe(
      tap((resp) => {
        // if (resp.user) localStorage.setItem("token", resp.token!);
        console.log("RESPUESTA:", resp);
      })
      // map((resp) => resp.ok),

      // catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `auth/renew`;

    const headers = new HttpHeaders().set(
      "x-token",
      localStorage.getItem("token") || ""
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
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
