package org.mlab.gorillana.domain

data class Student (
  var studentId: Int,
  var studentNumber: String,
  var lastName: String,
  var firstName: String,
  var faculityId: Int,
  var classId: Int,
  var entranceYear: String
)