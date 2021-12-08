import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

// import { ContactoService } from './contacto.service';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  public formContact!: FormGroup;

  constructor(
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

  send(): any {
    console.log(this.formContact.value);
    const { name, email, subject, message} = this.formContact.value;
    // this.contactoService.saveContact( name, email, subject, message).then( (resp) => {
    //   if(resp){
    //     this.router.navigateByUrl('admin');
    //   }
    // }).catch( ({error}) => {
    //   Swal.fire("Error", error.msg, "error");
    // })
  }


}


