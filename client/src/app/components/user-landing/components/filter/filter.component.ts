import { Component, AfterViewInit, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpBaseService } from "src/app/services/http-base.service";
import { Card } from '../../interfaces/card.interface';

declare function customInitFilter(): undefined;

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnChanges {

  @Input() isLoading: boolean = true;

  selectedItem = 0;

  buttons: { dataFilter: string; titulo: string }[] = [
    {
      dataFilter: "*",
      titulo: "Todos",
    },
    {
      dataFilter: ".soon",
      titulo: "En adopción",
    },
    {
      dataFilter: ".imp",
      titulo: "Perdidos",
    },
    {
      dataFilter: ".att",
      titulo: "Encontrados",
    },
  ];

  cards: Card[] = [
    {
      clase: "all",
      img: "assets/images/meeting-01.jpg",
      fecha: "Nov 12",
      titulo: "Titulo de prueba",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:1
    },
    {
      clase: "all soon",
      img: "assets/images/meeting-02.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:2
    },
    {
      clase: "all imp",
      img: "assets/images/meeting-03.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:3
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:4
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:5
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
      userid:6
    },
  ];

  constructor(private _httpService: HttpBaseService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.isLoading.currentValue) {
      customInitFilter();
      this.getAllPetsByCategory();
    }
  }

  getAllPetsByCategory(): void {
    const url = 'pets/category?category=ADOPTION';

    this._httpService.httpGet(url).toPromise().then((resp) => {
      console.log(resp);
    });
  }
}
