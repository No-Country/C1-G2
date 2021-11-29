import { Component, AfterViewInit } from "@angular/core";

declare function customInitFilter(): undefined;

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements AfterViewInit {
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

  cards: {
    clase: string;
    img: string;
    fecha: string;
    titulo: string;
    texto: string;
  }[] = [
    {
      clase: "all",
      img: "assets/images/meeting-01.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
    {
      clase: "all soon",
      img: "assets/images/meeting-02.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
    {
      clase: "all imp",
      img: "assets/images/meeting-03.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
    {
      clase: "all alt att",
      img: "assets/images/meeting-04.jpg",
      fecha: "Nov 12",
      titulo: "New Lecturers Meeting",
      texto: "Morbi in libero blandit lectus cursus ullamcorper.",
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    customInitFilter();
  }
}
