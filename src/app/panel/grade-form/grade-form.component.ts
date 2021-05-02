import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student.model';
import { StudentModel } from '../student-model.interface';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css'],
})
export class GradeFormComponent implements OnInit {
  @Input() student: Student | undefined;
  @ViewChild('studentForm') studentForm!: NgForm;
  @Output()
  createNewStudentRecord: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();
  @Output()
  updateStudentRecord: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();
  @Output()
  editStudentRecordCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  deleteStudentRecord: EventEmitter<any> = new EventEmitter<any>();
  @Input() editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.student, this.editMode);
    if (this.editMode) {
      this.studentForm.setValue({
        fName: this.student?.fName,
        lName: this.student?.lName,
        test1: this.student?.test1,
        test2: this.student?.test2,
        test3: this.student?.test3,
        project1: this.student?.project1,
        project2: this.student?.project2,
        project3: this.student?.project3,
        project4: this.student?.project4,
        project5: this.student?.project5,
      });
    }
  }

  onReset(): void {
    this.studentForm.reset();
    this.editStudentRecordCancel.emit();
  }

  onDelete(): void {
    this.studentForm.reset();
    this.deleteStudentRecord.emit();
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    const { value } = form;
    this.editMode
      ? this.updateStudentRecord.emit(value)
      : this.createNewStudentRecord.emit(value);
    this.onReset();
  }
}
