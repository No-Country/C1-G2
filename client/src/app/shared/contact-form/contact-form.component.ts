import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { ContactService } from './../../services/contact.service';



@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public formContact!: FormGroup;

  constructor(
    private contactService: ContactService,
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

  sendEmail(): void {
    try {
      console.log(this.formContact);

      const { name, email, subject, message } = this.formContact.value;

      this.contactService.sendEmail(name, email, subject, message);
      Swal.fire("Consulta enviada");

      this.router.navigateByUrl('home');

        } catch(error) {
          Swal.fire("Hubo un error");
        };

    }
}


