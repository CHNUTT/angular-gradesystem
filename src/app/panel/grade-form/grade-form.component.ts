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
  @Input() student!: Student;
  @ViewChild('studentForm') studentForm!: NgForm;
  @Output()
  createNewStudentRecord: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.studentForm);
    if (this.student) {
      this.studentForm.setValue({
        fName: this.student.fName,
        lName: this.student.lName,
        test1: this.student.test1,
        test2: this.student.test2,
        test3: this.student.test3,
        project1: this.student.project1,
        project2: this.student.project2,
        project3: this.student.project3,
        project4: this.student.project4,
        project5: this.student.project5,
      });
    }
  }

  onReset(): void {
    this.studentForm.reset();
    this.editMode = false;
  }

  onDelete(): void {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    const { value } = form;
    this.createNewStudentRecord.emit(value);
  }
}
