package org.mlab.gorillana.service

import org.apache.ibatis.annotations.Param
import org.mlab.gorillana.domain.Student
import org.mlab.gorillana.repository.StudentRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class StudentServiceImpl : StudentService {

  @Autowired
  lateinit var studentRepository: StudentRepository

  override fun getStudents(): List<Student> {
    return studentRepository.selectStudents()
  }

  override fun getStudentById(studentId: Int?): Student {
      return studentRepository.selectStudentById(studentId)
  }

  override fun insertStudent(Student: Student): List<Student> {
      studentRepository.insertStudentById(Student)
      return studentRepository.selectStudents()
  }

  override fun updateStudent(studentId: Int, student: Student): Student {
      student.studentId = studentId
      studentRepository.updateStudentById(student)
      return studentRepository.selectStudentById(studentId)
  }

  override fun deleteStudentById(@Param("studentId") studentId: Int?): List<Student> {
      studentRepository.deleteStudentById(studentId)
      return studentRepository.selectStudents()
  }
}
