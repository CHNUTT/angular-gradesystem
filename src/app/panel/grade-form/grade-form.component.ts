import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
})
export class GradeFormComponent implements OnInit {
  @Input() student!: StudentModel;
  @ViewChild('form') studentForm!: NgForm;
  @Output()
  createNewStudentRecord: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.student) {
      this.student = new StudentModel();
    }
  }

  onReset(): void {
    this.studentForm.reset();
    this.editMode = false;
  }

  onDelete(): void {}

  onSubmit(form: NgForm): void {
    console.log(this.student);
    // this.createNewStudentRecord.emit(this.student);
  }
}
