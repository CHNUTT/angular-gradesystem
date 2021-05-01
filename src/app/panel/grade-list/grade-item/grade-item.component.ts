import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../student.model';

@Component({
  selector: '[app-grade-item]',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.css'],
})
export class GradeItemComponent implements OnInit {
  @Input()
  student!: Student;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
