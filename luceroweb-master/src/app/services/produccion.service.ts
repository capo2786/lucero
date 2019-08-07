import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { produccion } from '../models/produccion';

@Injectable({
    providedIn: 'root'
  })
  export class ProduccionService {
      
  student_list: AngularFireList<produccion[]>;
  student: AngularFireObject<produccion>;

  constructor(private db: AngularFireDatabase,private storage: AngularFireStorage,) { 
    this.getStudentList();
  }
  getStudentList() {
    this.student_list = this.db.list("producciones");
    return this.student_list;
  }

  createStudentData(student: produccion, file: File){
    let key = this.db.list('producciones').push(student).key;
    //Upload File to firebase Storage
    const path = `producciones` + `/` + key + `/` + student.nombre;
    const storageRef = this.storage.ref(path);
    const uploadTask = this.storage.upload(path,file);
    // Done Uploading and changes into student-list database to add ImageURL
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(data => { 
          student.imageUrl = data;
          this.db.object('producciones/'+key).set(student);
        });
      })
    ).subscribe();
  }


  getStudentById(key) {
		this.student = this.db.object('producciones/' + key);
		return this.student;
  }

  updateStudentData(id, student,file: File) { 
    this.db.object('/producciones/' + id).update(student);
    const path = `producciones` + `/` + id + `/` + student.nombre;
    const storageRef = this.storage.ref(path);
    const uploadTask = this.storage.upload(path,file);
    // Done Uploading and changes into student-list database to add ImageURL
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(data => { 
          student.imageUrl = data;
          this.db.object('producciones/'+id).set(student);
        });
      })
    ).subscribe();
  }

  deleteStudentRecord(key: string) {
		this.student_list.remove(key);
	}
  
}