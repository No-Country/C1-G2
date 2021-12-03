import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    const token: string | null = localStorage.getItem('token');
    let request;

    if (token) {
      request = req.clone({
        headers: req.headers.set('x-auth', token)
      });
    } else {
      request = req.clone();
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/login/sign-in');
        }

        return throwError(err);
      })
    );
  }
}
