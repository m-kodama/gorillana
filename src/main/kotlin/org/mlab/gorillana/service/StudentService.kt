package org.mlab.gorillana.service

import org.mlab.gorillana.domain.Student

interface StudentService {

  fun getStudents(): List<Student>

  fun getStudentById(studentId: Int?): Student

  fun getInsertStudent(Student: Student): List<Student>

  fun getUpdateStudent(studentId: Int, Student: Student): Student

  fun getDeleteStudentById(studentId: Int?): Student
}
