import * as _ from 'lodash';
import * as moment from 'moment';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// App Services
import { FirebaseStorageUploadService } from 'src/app/services/firebase-storage-upload.service';
import { HttpBaseService } from 'src/app/services/http-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

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
    private _uploadService: FirebaseStorageUploadService,
    private _authService: AuthService,
    private route: ActivatedRoute
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
    });
  }

  ngOnInit(): void {
    this.getPetDetails();
  }

  ngOnDestroy(): void {
    this.urlImageSubscription.unsubscribe();
  }

  private getPetDetails(): void {
    this._httpService.httpGet(`pet_adoption/pets/byid/${_.get(this.route.params, '_value.id')}`).toPromise()
      .then((resp) => {
        console.log(resp);

        this.form.patchValue({
          petname: resp.pets.petname,
          species: resp.pets.species,
          race: resp.pets.race,
          gender: resp.pets.gender,
          description: resp.pets.description,
          age: resp.pets.age,
          category: resp.pets.category,
          is_castrated: resp.pets.is_castrated === true ? 'true' : 'false',
          image: resp.pets.image,
        });
      })
      .catch((err) => console.log(err));
  }

  public saveForm(): void {
    // Setting manually the is_castrated value cause the bootstrap radio emits a string and not a boolean
    const formData = _.cloneDeep(this.form.value);
    const { is_castrated } = formData;
    const currentUser = this._authService.usuario;
    delete formData.is_castrated;

    // Edit Mode
    if (_.get(this.route.params, '_value.id', undefined)) {
      this._httpService.httpPut(
        `pet_adoption/pets/update/${_.get(this.route.params, '_value.id')}`,
        { ...formData, is_castrated: is_castrated === 'true' ? true : false }
      ).toPromise()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      // Creation Mode
      this._httpService.httpPost(
        'pet_adoption/pets',
        {
          ...formData, is_castrated: is_castrated === 'true' ? true : false,
          userid: currentUser.uid,
          publicationDate: moment(),
          category: 'ADOPTION'
        }
      ).toPromise()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  public onImageSelectEmitter(img: File) {
    this._uploadService.uploadImage(img);
  }
}
