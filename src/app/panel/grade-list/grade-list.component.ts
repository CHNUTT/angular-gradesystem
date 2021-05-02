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

  // tell parent component about the event clicked on each item (<tr></tr>) occured.
  handleOnGradeItemClicked(index: number) {
    this.onGradeItemClicked.emit(index);
  }
}
