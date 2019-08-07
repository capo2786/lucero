import { Component, OnInit } from '@angular/core';
import { img } from '../models/img';
import { ImgService } from '../services/img.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, autoplaySpeed: 1000};
  student_list: img[];

  constructor(private studentService : ImgService) {
    this.student_list = []
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
          this.student_list.push(y as img);
        });
      }
    );
  }
}
