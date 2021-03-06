import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddInstrumentDialogComponent } from './room/room-edit-dialog/add-instrument-dialog/add-instrument-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { StudentEditDialogComponent } from './student/student-edit-dialog/student-edit-dialog.component';
import { AddCourseDialogComponent } from './student/student-edit-dialog/add-course-dialog/add-course-dialog.component';
import {InstrumentComponent} from './instrument/instrument.component';
import { RoomEditDialogComponent } from './room/room-edit-dialog/room-edit-dialog.component';
import { RoomComponent } from './room/room.component';
import { StudentComponent } from "./student/student.component";
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LessonComponent } from './lesson/lesson.component';
import { MatTabsModule } from "@angular/material/tabs";
import {RouterModule, Routes} from "@angular/router";
import { InstrumentEditDialogComponent } from './instrument/instrument-edit-dialog/instrument-edit-dialog.component';
import { LessonEditDialogComponent } from './lesson/lesson-edit-dialog/lesson-edit-dialog.component';
import { CourseEditDialogComponent } from './course/course-edit-dialog/course-edit-dialog.component';
import { TeacherEditDialogComponent } from './teacher/teacher-edit-dialog/teacher-edit-dialog.component';
import { AddRoomDialogComponent } from './instrument/instrument-edit-dialog/add-room-dialog/add-room-dialog.component';
import { AddStudentDialogComponent } from './course/course-edit-dialog/add-student-dialog/add-student-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy
} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    RoomEditDialogComponent,
    AddInstrumentDialogComponent,
    StudentEditDialogComponent,
    AddCourseDialogComponent,
    RoomComponent,
    InstrumentComponent,
    StudentComponent,
    CourseComponent,
    TeacherComponent,
    LessonComponent,
    routingComponents,
    InstrumentEditDialogComponent,
    LessonEditDialogComponent,
    CourseEditDialogComponent,
    TeacherEditDialogComponent,
    AddRoomDialogComponent,
    AddStudentDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
