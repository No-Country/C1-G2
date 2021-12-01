import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.css"],
})
export class UploadImageComponent implements OnInit {
  preview: string = "";

  @Output() imageClickedEmitter: EventEmitter<Object> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  capturarArchivo(event: any): any {
    const archivo = event.target.files[0];
    this.imageClickedEmitter.emit(archivo);

    // para preview con archivo base64
    this.extraerBase64(archivo).then((imagen: any) => {
      this.preview = imagen.base;
      console.log(archivo);
    });
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
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
