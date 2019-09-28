import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  students: Array<Student>=[];

  newStudent: Student = new Student();

  constructor() { 
    this.students=[
      {
        name:"Darry",
        age: 20,
        address:"Chilaw"
      }
    ];
  }

  ngOnInit() {
  }

  onAdd(){

    console.log(this.newStudent);
    this.students.push(this.newStudent);
    this.newStudent = new Student();
  }

}
