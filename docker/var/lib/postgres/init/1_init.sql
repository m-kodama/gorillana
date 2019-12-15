DROP TABLE IF EXISTS students;

-- 学生テーブル
CREATE TABLE students (
  student_id SERIAL NOT NULL,
  student_number VARCHAR(50) NOT NULL,
  last_name VARCHAR(50),
  first_name VARCHAR(50),
  faculity_id INTEGER,
  class_id INTEGER,
  entrance_year CHAR(4) NOT NULL,
  PRIMARY KEY (student_id)
);

INSERT INTO students (student_number, last_name, first_name, faculity_id, class_id, entrance_year) VALUES
  ('GOA1001', '門脇', '沙耶', 1, 1, '2019'),
  ('GOB1001', '西原', '徹', 2, 4, '2019'),
  ('GOC1001', '梅津', '憲仁', 3, 7, '2019');

-- 学部テーブル
DROP TABLE IF EXISTS faculities;

CREATE TABLE faculities (
  faculity_id SERIAL NOT NULL,
  faculity_name VARCHAR(255) NOT NULL,
  faculity_name_short VARCHAR(5),
  PRIMARY KEY (faculity_id)
);

INSERT INTO faculities (faculity_name, faculity_name_short) VALUES
  ('文学部', '文'),
  ('教育学部', '教'),
  ('法学部', '法'),
  ('経済学部', '経'),
  ('理学部', '理');