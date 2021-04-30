import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  state = {
    students: [
      new StudentModel('John', 'Lennon', 100, 90, 95, 100, 65, 78, 80, 94),
      new StudentModel('Kenneth', 'Kohl', 67, 86, 100, 80, 95, 72, 88, 89),
      new StudentModel('Chomchanok', 'Taosabai', 100, 100, 100, 100, 100, 100, 100, 100),
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
