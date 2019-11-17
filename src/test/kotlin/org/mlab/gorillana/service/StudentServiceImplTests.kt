package org.mlab.gorillana.service

import com.ninja_squad.dbsetup.Operations
import com.ninja_squad.dbsetup.DbSetup
import com.ninja_squad.dbsetup.destination.DataSourceDestination
import javax.sql.DataSource
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mlab.gorillana.domain.Student
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class StudentServiceImplTests {

  @Autowired
  lateinit var studentService: StudentService

  @Autowired
  lateinit var dataSource: DataSource

  val DELETE_ALL = Operations.deleteAllFrom("students")
  val INSERT = Operations.insertInto("students")
    .columns("student_id", "student_number", "last_name", "first_name", "class_id", "faculity_id", "entrance_year")
    .values(1, "TG1009801", "田中", "義継", 1, 1, "2000")
    .values(2, "TG1009802", "小山田", "雄二", 2, 1, "2000")
    .values(3, "TG1009903", "関", "智和", 3, 2, "2000")
    .build()

  @BeforeEach
  fun setup() {
    val dest = DataSourceDestination(dataSource)
    val ops = Operations.sequenceOf(DELETE_ALL, INSERT)
    val dbSetup = DbSetup(dest, ops)
    dbSetup.launch()
  }

  @Test
  fun 全学生を取得() {
    val students: List<Student> = studentService.getStudents()
    val expectedValue = 3
    val actualValue = students.count()
    assertEquals(expectedValue, actualValue)
  }

  @Test
  fun 学生ID2の学生を取得() {
    val student: Student = studentService.getStudentById(2)
    val expectedValue  = "TG1009802"
    val actualValue = student.studentNumber
    assertEquals(expectedValue, actualValue)
  }

  @Test
  fun 学生を追加() {
    val student = Student(0, "ABC", "テスト", "雄一", 1, 1, "2000")
    val expectedValue = student.studentNumber
    val insertedStudent: Student = studentService.insertStudent(student)
    val actualValue = insertedStudent.studentNumber
    assertEquals(expectedValue, actualValue)
  }

  @Test
  fun 学生ID2の学生の学籍番号を更新する() {
    val student = Student(2, "ABC", "小山田", "雄二", 2, 1, "2000")
    val expectedValue  = student.studentNumber
    val actualValue = studentService.updateStudent(2, student).studentNumber
    assertEquals(expectedValue, actualValue)
  }

  @Test
  fun 学生ID1の学生を削除する() {
    val deleteStudentId = 1
    studentService.deleteStudentById(deleteStudentId)
    val expectedValue = null
    val actualValue = studentService.getStudentById(deleteStudentId)
    assertEquals(expectedValue, actualValue)
  }
}
