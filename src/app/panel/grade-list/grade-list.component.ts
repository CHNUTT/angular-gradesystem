import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css'],
})
export class GradeListComponent implements OnInit {
  @Input() students: Student[] | undefined;
  @Output()
  onGradeItemClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleOnGradeItemClicked(index: number) {
    console.log(index);
    this.onGradeItemClicked.emit(index);
  }
}
