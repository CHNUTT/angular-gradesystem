import { Component, Input, OnInit } from '@angular/core';
import { StudentModel } from '../../student.model';

@Component({
  selector: '[app-grade-item]',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.css'],
})
export class GradeItemComponent implements OnInit {
  @Input()
  student!: StudentModel;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
