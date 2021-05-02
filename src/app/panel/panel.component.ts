import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentModel } from './student-model.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  // Define application state to hold
  // 1. student records as array of Student objects
  // 2. editmode as boolean
  // 3. selectedStudent (editing mode)
  // 4. selectStudentIndex (editing mode)

  state = {
    students: [
      new Student('John', 'Lennon', 100, 90, 95, 100, 65, 78, 80, 94),
      new Student('Kenneth', 'Kohl', 67, 86, 100, 80, 95, 72, 88, 89),
      new Student(
        'Chomchanok',
        'Taosabai',
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ),
    ],
    editMode: false,
    selectedStudent: <Student | undefined>undefined,
    selectedStudentIndex: -1,
  };

  constructor() {}

  ngOnInit(): void {}

  // When Submit button from form is click
  // this method will perform action to add new student record to application state
  onCreateNewStudentRecord(student: StudentModel): void {
    const newStudent = new Student(
      student.fName,
      student.lName,
      student.test1,
      student.test2,
      student.test3,
      student.project1,
      student.project2,
      student.project3,
      student.project4,
      student.project5
    );
    this.state.students.push(newStudent);
  }

  // when Submit button from form is click in editmode
  // this method will create new student record and replace the old student record at the selected position
  onUpdateStudentRecord(student: StudentModel): void {
    this.state.students[this.state.selectedStudentIndex] = new Student(
      student.fName,
      student.lName,
      student.test1,
      student.test2,
      student.test3,
      student.project1,
      student.project2,
      student.project3,
      student.project4,
      student.project5
    );
    this.resetEditMode();
  }

  // when particular student row in table is clicked
  // this will perform changing state to edit mode and keep selected student position in state
  onEditStudentRecord(index: number): void {
    this.state.selectedStudent = this.state.students[index];
    this.state.editMode = true;
    this.state.selectedStudentIndex = index;
  }

  // when in edit mode and cancel button is clicked
  // this will call reset edit mode
  onEditStudentRecordCancel(): void {
    this.resetEditMode();
  }

  // when in edit mode and delete button is clicked
  // this will remove the current selected student record from students array in application state
  // and call reset edit mode
  onDeleteStudentRecord(): void {
    this.state.students = this.state.students.filter(
      (student, index) => index !== this.state.selectedStudentIndex
    );
    this.resetEditMode();
  }

  // this function will reset back to normal mode from edit mode and clear the selected student record back to initail state
  resetEditMode(): void {
    this.state.selectedStudentIndex = -1;
    this.state.editMode = false;
    this.state.selectedStudent = undefined;
  }
}
