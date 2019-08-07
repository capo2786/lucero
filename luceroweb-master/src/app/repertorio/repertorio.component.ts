import { Component, OnInit } from '@angular/core';
import { produccion } from '../models/produccion';
import { ProduccionService } from '../services/produccion.service';
import { cancion } from '../models/cancion';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.css']
})
export class RepertorioComponent implements OnInit {
  student_list: produccion[];
  student_lista: cancion[];
  constructor(private studentService :ProduccionService, private studentService1: CancionService  ) { 
    this.student_list = [];
  }

  ngOnInit() {
    this.getAllStudents();
    this.getAllStudents1();
  }
  getAllStudents() {
    // this.spinnerService.show();
    const x = this.studentService.getStudentList();
    x.snapshotChanges().subscribe(
      Response => {
        this.student_list = [];
        Response.forEach(element => {
          const y = element.payload.toJSON();
          y["$key"] = element.key;
          this.student_list.push(y as produccion);
        });
      }
    );
  }

  getAllStudents1() {
    // this.spinnerService.show();
    const x = this.studentService1.getStudentList();
    x.snapshotChanges().subscribe(
      Response => {
        this.student_lista = [];
        Response.forEach(element => {
          const y = element.payload.toJSON();
          y["$key"] = element.key;
          this.student_lista.push(y as cancion);
        });
      }
    );
  }
}