import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { HttpBaseService } from 'src/app/services/http-base.service';


@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public formContact!: FormGroup;

  constructor(
    private _httpService: HttpBaseService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      email: [null,[Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      subject: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      message: [null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
    });
  }

  public sendEmail(): void {
    console.log(this.formContact);
    const { name, email, subject, message } = this.formContact.value;

    this._httpService.httpPost('pet_adoption/form', this.formContact.value).toPromise()
    .then((resp: any) => {
      this.formContact = resp;
      console.log(this.formContact);
    })
    .catch((err: any) => console.log(err));
  }


}


