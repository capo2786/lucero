import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { cancion } from '../models/cancion';



@Injectable({
    providedIn: 'root'
  })
  export class CancionService {
  
    student_list: AngularFireList<cancion[]>;
    student: AngularFireObject<cancion>;
  
    constructor(private db: AngularFireDatabase,private storage: AngularFireStorage,) { 
      this.getStudentList();
    }
  
    getStudentList() {
      this.student_list = this.db.list("canciones");
      return this.student_list;
    }
  
    createStudentData(student: cancion, file: File){
      let key = this.db.list('canciones').push(student).key;
      //Upload File to firebase Storage
      const path = `canciones` + `/` + key ;
      const storageRef = this.storage.ref(path);
      const uploadTask = this.storage.upload(path,file);
      // Done Uploading and changes into student-list database to add ImageURL
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(data => { 
            student.cancionUrl = data;
            this.db.object('canciones/'+key).set(student);
          });
        })
      ).subscribe();
    }
  
  
    getStudentById(key) {
          this.student = this.db.object('canciones/' + key);
          return this.student;
    }
  
    updateStudentData(id, student,file: File) { 
      this.db.object('/canciones/' + id).update(student);
      const path = `canciones` + `/` + id + `/` + student.firstname;
      const storageRef = this.storage.ref(path);
      const uploadTask = this.storage.upload(path,file);
      // Done Uploading and changes into student-list database to add ImageURL
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(data => { 
            student.imageUrl = data;
            this.db.object('canciones/'+id).set(student);
          });
        })
      ).subscribe();
    }
  
    deleteStudentRecord(key: string) {
          this.student_list.remove(key);
      }
    
  }