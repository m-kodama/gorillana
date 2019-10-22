DROP TABLE IF EXISTS students;

CREATE TABLE students (
  student_id SERIAL NOT NULL,
  student_number VARCHAR(30) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  faculity_id SERIAL NOT NULL,
  class_id SERIAL NOT NULL,
  entrance_year CHAR(4) NOT NULL,
  PRIMARY KEY (student_id)
);