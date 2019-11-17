package org.mlab.gorillana.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.mlab.gorillana.domain.Student
import org.mlab.gorillana.service.StudentService
import org.mlab.gorillana.common.HttpStatusCode

@RestController
@CrossOrigin
@RequestMapping("/api")
class StudentController() {

  @Autowired
  lateinit var studentService: StudentService

  // 全件取得
  @GetMapping("/students")
  fun getStudents(): List<Student> {
      return studentService.getStudents()
  }

  // 1件取得
  @GetMapping("/students/{id}")
  fun getStudentById(@PathVariable("id") studentId: Int?): Student {
      return studentService.getStudentById(studentId)
  }

  // 1件作成
  @PostMapping("/students")
  @ResponseStatus(HttpStatus.CREATED)
  fun createStudentById(@RequestBody student: Student): List<Student> {
      return studentService.insertStudent(student)
  }

  // 1件編集
  @PutMapping("/students/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  fun updateStudentById(@PathVariable("id") studentId: Int, @RequestBody student: Student): Student {
      return studentService.updateStudent(studentId, student)
  }

  // 1件削除
  @DeleteMapping("/students/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  fun deleteStudentById(@PathVariable("id") studentId: Int?): List<Student> {
      return studentService.deleteStudentById(studentId)
  }
}
