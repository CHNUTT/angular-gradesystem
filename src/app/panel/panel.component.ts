import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentModel } from './student-model.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
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
  };

  constructor() {}

  ngOnInit(): void {}

  onCreateNewStudentRecord(student: StudentModel): void {
    console.log(student);
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
}
