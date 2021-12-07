import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// App Services
import { HttpBaseService } from 'src/app/services/http-base.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost-table.component.html',
  styleUrls: ['./lost-table.component.css']
})
export class LostTableComponent implements OnInit {
  public lostList: Array<any> = [];
  constructor(
    private _httpService: HttpBaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._httpService.httpGet('pets/lost').toPromise()
      .then((resp: any) => {
        this.lostList = resp.pets;
        console.log(this.lostList);
      })
      .catch((err) => console.log(err));
  }

  public onDeletePet(id: string): void {
    this._httpService.httpDelete('pets/delete', { _id: id }).toPromise()
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));
  }

  public onEditPet(id: string): void {
    console.log(id);
    this.router.navigate([`admin/adoption-publish/edit/${id}`]);
  }
}
