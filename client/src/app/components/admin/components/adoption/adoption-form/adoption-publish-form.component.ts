import { HttpBaseService } from './../../../../../services/http-base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adoption-publish-form',
  templateUrl: './adoption-publish-form.component.html',
  styleUrls: ['./adoption-publish-form.component.css']
})
export class AdoptionPublishFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _httpService: HttpBaseService
  ) {
    this.form = this.fb.group({
      petname: new FormControl(null, [
        Validators.required
      ]),
      species: new FormControl(null, [
        Validators.required
      ]),
      race: new FormControl(null, [
        Validators.required
      ]),
      gender: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
      age: new FormGroup({
        age_range: new FormControl(null, [
          Validators.required
        ]),
        number: new FormControl(null, [
          Validators.required
        ])
      }),
      category: new FormControl({ value: 'ADOPTION', disabled: true }, [
        Validators.required
      ]),
      is_castrated: new FormControl(null, [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    // this._httpService.httpGet('').toPromise().then((res) => console.log(res))
  }

  public saveForm(): void {
    console.log(this.form);
  }
}
