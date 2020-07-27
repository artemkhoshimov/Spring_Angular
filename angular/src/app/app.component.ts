import { Component } from '@angular/core';
import {RoomComponent} from "./room/room.component";
import {InstrumentComponent} from "./instrument/instrument.component";
import {StudentComponent} from "./student/student.component";
import {CourseComponent} from "./course/course.component";
import {TeacherComponent} from "./teacher/teacher.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  navLinks = [
    { path: 'room', label: 'Аудитория' },
    { path: 'instrument', label: 'Инструменты' },
    { path: 'teacher', label: 'Учитель' },
    { path: 'student', label: 'Студенты' },
    { path: 'course', label: 'Курс' },
    { path: 'lesson', label: 'Урок' }
  ];

}



