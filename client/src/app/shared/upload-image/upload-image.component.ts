import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.css"],
})
export class UploadImageComponent implements OnInit {

  @Input() preview: string = '';
  @Output() imageClickedEmitter: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public capturarArchivo(event: any): void {
    const archivo = event.target.files[0];
    this.imageClickedEmitter.emit(archivo);

    // para preview con archivo base64
    this.extraerBase64(archivo).then((imagen: any) => {
      this.preview = imagen.base;
    });
  }

  public extraerBase64 = async ($event: any) =>
    new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (error) {
        return null;
      }
    });
}
