package org.mlab.gorillana.service

import org.mlab.gorillana.domain.Student

interface StudentService {

  fun getStudents(): List<Student>

  fun getStudentById(studentId: Int?): Student

  fun insertStudent(student: Student): List<Student>

  fun updateStudent(studentId: Int, student: Student): Student

  fun deleteStudentById(studentId: Int?): List<Student>
}
