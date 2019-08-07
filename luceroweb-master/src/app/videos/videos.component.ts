import { Component, OnInit } from '@angular/core';

import { video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  student_list: video[];
  constructor(private studentService :VideoService  ) { 
    this.student_list = [];
  }

  ngOnInit() {
    this.getAllStudents();
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
          this.student_list.push(y as video);
        });
      }
    );
  }

}
