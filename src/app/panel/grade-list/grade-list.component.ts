import { Component, Input, OnInit } from '@angular/core';
import { StudentModel } from '../student.model'

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  @Input() students: StudentModel[] | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
