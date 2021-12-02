import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.css"],
})
export class UploadImageComponent {

  @Output() imageClickedEmitter: EventEmitter<Object> = new EventEmitter();

  public preview: string = "";

  constructor() { }

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
