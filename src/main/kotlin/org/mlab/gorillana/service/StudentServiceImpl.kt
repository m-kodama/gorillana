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

  override fun insertStudent(student: Student): Student {
      studentRepository.insertStudent(student)
      return studentRepository.selectStudentById(student.studentId)
  }

  override fun updateStudent(studentId: Int, student: Student): Student {
      studentRepository.updateStudentById(student)
      return studentRepository.selectStudentById(studentId)
  }

  override fun deleteStudentById(@Param("studentId") studentId: Int?) {
      studentRepository.deleteStudentById(studentId)
      return
  }
}
