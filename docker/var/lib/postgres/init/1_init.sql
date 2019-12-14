DROP TABLE IF EXISTS students;

CREATE TABLE students (
  student_id SERIAL NOT NULL,
  student_number VARCHAR(30) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  faculity_id INTEGER NOT NULL,
  class_id INTEGER NOT NULL,
  entrance_year CHAR(4) NOT NULL,
  PRIMARY KEY (student_id)
);

INSERT INTO students (student_number, last_name, first_name, faculity_id, class_id, entrance_year) VALUES
  ('GOA1001', '門脇', '沙耶', 1, 1, '2019'),
  ('GOB1001', '西原', '徹', 2, 4, '2019'),
  ('GOC1001', '梅津', '憲仁', 3, 7, '2019');
