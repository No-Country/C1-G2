import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpBaseService } from 'src/app/services/http-base.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  
  card: any = {};
  petId: string = '';

  constructor(
    private _httpService: HttpBaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.petId = _.get(this.route.params, '_value.id');

    this.getPetDetails();
  }

  private getPetDetails(): void {
    this._httpService.httpGet(`pets/byid/${this.petId}`).toPromise()
      .then((resp) => {
        console.log(resp);
        this.card = resp.pets;
      })
      .catch((err) => console.log(err));
  }
}
