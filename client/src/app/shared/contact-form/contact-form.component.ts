import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

// import { RegistroService } from './registro.service';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required
      ]),
      asunto: new FormControl(null, [
        Validators.required
      ]),
      mensaje: new FormControl(null, [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  public saveForm(): void {
    console.log(this.form);
  }

  send(): void {
    const { name, email, asunto, mensaje } = this.form.value;

    // // this.authService.mail(username, password).then( (resp) => {
    // //   if(resp){
    // //     this.router.navigateByUrl('home');
    // //   }
    // // }).catch( ({error}) => {
    // //   Swal.fire("Error", error.msg, "error");
    // })
  }
}
