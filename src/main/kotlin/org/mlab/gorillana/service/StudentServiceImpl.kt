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

  override fun getInsertStudent(Student: Student): List<Student> {
      studentRepository.insertStudentById(Student)
      return studentRepository.selectStudents()
  }

  override fun getUpdateStudent(studentId: Int, Student: Student): Student {
      Student.studentId = studentId
      return studentRepository.selectStudentById(studentId)
  }

  override fun getDeleteStudentById(@Param("studentId") studentId: Int?): Student {
      studentRepository.deleteStudentById(studentId)
      return studentRepository.selectStudentById(studentId)
  }
}
