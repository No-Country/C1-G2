import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    return this.authService.validarToken().pipe(
      tap((valid) => {
        console.log('VALID CAN activate', valid);
        if (!valid) {
          this.router.navigateByUrl('login/sign-in');
        }
      })
    );
  }
}
