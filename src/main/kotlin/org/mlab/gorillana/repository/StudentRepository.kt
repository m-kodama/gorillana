package org.mlab.gorillana.repository

import org.apache.ibatis.annotations.Mapper
import org.apache.ibatis.annotations.Select
import org.apache.ibatis.annotations.Param
import org.apache.ibatis.annotations.Insert
import org.apache.ibatis.annotations.Update
import org.apache.ibatis.annotations.Delete
import org.apache.ibatis.annotations.Options
import org.mlab.gorillana.domain.Student
import org.springframework.stereotype.Repository

@Mapper
@Repository
interface StudentRepository {

    @Select("SELECT * FROM students ORDER BY student_id ASC;")
    fun selectStudents(): List<Student>

    @Select("SELECT * FROM students WHERE student_id = #{studentId}")
    fun selectStudentById(@Param("studentId") studentId: Int?): Student

    @Insert("INSERT INTO students(student_number, last_name, first_name, faculity_id, class_id, entrance_year) values(#{studentNumber}, #{lastName}, #{firstName}, #{faculityId}, #{classId}, #{entranceYear})")
    @Options(useGeneratedKeys=true, keyProperty="studentId")
    fun insertStudent(student: Student): Int

    @Update("UPDATE students SET student_number=#{studentNumber}, last_name=#{lastName}, first_name=#{firstName}, faculity_id=#{faculityId}, class_id=#{classId}, entrance_year=#{entranceYear} WHERE student_id=#{studentId}")
    fun updateStudentById(student: Student): Int

    @Delete("DELETE FROM students WHERE student_id=#{studentId}")
    fun deleteStudentById(@Param("studentId") studentId: Int?): Int
}
