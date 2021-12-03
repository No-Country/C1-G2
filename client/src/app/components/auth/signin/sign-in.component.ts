import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

import Swal from "sweetalert2";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  public saveForm(): void {
    console.log(this.form);
  }

  login(): void {
    const { username, password } = this.form.value;

    this.authService.login(username, password).then( (resp) => {
      if(resp){
        this.router.navigateByUrl('admin');
      }
    }).catch( ({error}) => {
      Swal.fire("Error", error.msg, "error");
    })
  }
}
