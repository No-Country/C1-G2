import { Injectable } from '@angular/core';

// Angular firestore
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageUploadService {

  private ADOPTION = 'pet-adoption';
  private LOST = 'pet-lost';
  private FOUND = 'pet-found';
  public $urlString: Subject<any> = new Subject;

  constructor(
    private storage: AngularFireStorage
  ) { }

  public uploadImage(file: any) {
    const randomId = Math.random().toString(36).substring(2);
    const storagePath = `${this.ADOPTION}/test_${randomId}`;
    const storageRef = this.storage.ref(storagePath);
    const uploadTask = this.storage.upload(storagePath, file);

    uploadTask.percentageChanges().subscribe(progress => {
      console.log(progress);
    });

    uploadTask.snapshotChanges().toPromise().then(() => {
        storageRef.getDownloadURL().subscribe(resp => {
        console.log(resp);
        this.$urlString.next(resp);
        this.$urlString.complete();
      });
    })
  }
}
