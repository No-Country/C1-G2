import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public auth: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private router: Router
  ) { 
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {}

  public onNavigateToSignIn(): void {
    this.router.navigate(['/login/sign-in']);
  }

  public onNavigateToDashboard(): void {
    this.router.navigate(['/admin']);
  }

}
