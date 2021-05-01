import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student.model'

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  @Input() students: Student[] | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
