import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { video } from '../models/video';
import { finalize } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
  export class VideoService {
  
    student_list: AngularFireList<video[]>;
    student: AngularFireObject<video>;
  
    constructor(private db: AngularFireDatabase,private storage: AngularFireStorage,) { 
      this.getStudentList();
    }
  
    getStudentList() {
      this.student_list = this.db.list("student-lista");
      return this.student_list;
    }
  
    createStudentData(student: video, file: File){
      let key = this.db.list('student-lista').push(student).key;
      //Upload File to firebase Storage
      const path = `student-lista` + `/` + key ;
      const storageRef = this.storage.ref(path);
      const uploadTask = this.storage.upload(path,file);
      // Done Uploading and changes into student-list database to add ImageURL
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(data => { 
            student.imageUrl = data;
            this.db.object('student-lista/'+key).set(student);
          });
        })
      ).subscribe();
    }
  
  
    getStudentById(key) {
          this.student = this.db.object('student-lista/' + key);
          return this.student;
    }
  
    updateStudentData(id, student,file: File) { 
      this.db.object('/student-lista/' + id).update(student);
      const path = `student-lista` + `/` + id + `/` + student.firstname;
      const storageRef = this.storage.ref(path);
      const uploadTask = this.storage.upload(path,file);
      // Done Uploading and changes into student-list database to add ImageURL
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(data => { 
            student.imageUrl = data;
            this.db.object('student-lista/'+id).set(student);
          });
        })
      ).subscribe();
    }
  
    deleteStudentRecord(key: string) {
          this.student_list.remove(key);
      }
    
  }
  