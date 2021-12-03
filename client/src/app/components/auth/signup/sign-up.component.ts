import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import Swal from "sweetalert2";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  public saveForm(): void {
    console.log(this.form);
  }

  register(): void {
    const { username, password } = this.form.value;

    this.authService.register(username, password).then( (resp) => {
      if(resp){
        this.router.navigateByUrl('admin');
      }
    }).catch( ({error}) => {
      Swal.fire("Error", error.msg, "error");
    })
  }
}
