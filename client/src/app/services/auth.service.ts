import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

import { AuthResponse, Usuario } from "../interfaces/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  registro(email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`;

    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap(({ user, token }) => {
        if (user) localStorage.setItem("token", token!);
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/api/pet_adoption/auth/login`;

    console.log("URL:", url);

    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        // if (resp.user) localStorage.setItem("token", resp.token!);
        console.log("RESPUESTA:", resp);
      })
      // map((resp) => resp.ok),

      // catchError((err) => of(err.error.msg))
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;

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
