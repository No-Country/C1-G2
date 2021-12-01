import * as _ from 'lodash';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// App Services
import { FirebaseStorageUploadService } from 'src/app/services/firebase-storage-upload.service';
import { HttpBaseService } from 'src/app/services/http-base.service';

@Component({
  selector: 'app-adoption-publish-form',
  templateUrl: './adoption-publish-form.component.html',
  styleUrls: ['./adoption-publish-form.component.css']
})
export class AdoptionPublishFormComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public urlImageSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private _httpService: HttpBaseService,
    private _uploadService: FirebaseStorageUploadService
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
      ]),
      image: new FormControl(null, [
        Validators.required
      ])
    });

    this.urlImageSubscription = this._uploadService.$urlString.subscribe((url) => {
      if (!_.isEmpty(url)) {
        this.form.controls.image.setValue(url);
      }
    })
  }

  ngOnInit(): void {
    // this._httpService.httpGet('').toPromise().then((res) => console.log(res))
  }

  ngOnDestroy(): void {
    this.urlImageSubscription.unsubscribe();
  }

  public saveForm(): void {
    console.log(this.form);
  }

  public onImageSelectEmitter(img: File) {
    this._uploadService.uploadImage(img);
  }
}
