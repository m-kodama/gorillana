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

-- クラステーブル
DROP TABLE IF EXISTS classes;

CREATE TABLE classes (
  class_id SERIAL NOT NULL,
  class_name VARCHAR(255) NOT NULL,
  class_name_short VARCHAR(5),
  fiscal_year CHAR(4) NOT NULL,
  PRIMARY KEY (class_id)
);

INSERT INTO classes (class_name, class_name_short, fiscal_year) VALUES
  ('文学部', '文', '2020'),
  ('教育学部1組', '教1', '2020'),
  ('教育学部6組', '教6', '2020'),
  ('教育学部7組', '教7', '2020'),
  ('法学部', '法', '2020'),
  ('経済学部', '経', '2020'),
  ('理学部', '理', '2020');

-- 授業計画テーブル
DROP TABLE IF EXISTS syllabus;

CREATE TABLE syllabus (
  syllabus_id SERIAL NOT NULL,
  class_id INTEGER,
  lesson_date DATE,
  unit_id INTEGER,
  day_of_week INTEGER,
  lesson_number INTEGER NOT NULL,
  class_hours_id INTEGER,
  has_quiz BOOLEAN NOT NULL,
  task_deadline TIMESTAMP,
  PRIMARY KEY (syllabus_id)
);

-- 授業時間テーブル
DROP TABLE IF EXISTS class_hours;

CREATE TABLE class_hours (
  class_hours_id SERIAL NOT NULL,
  hour INTEGER NOT NULL,
  beginning_time TIME,
  ending_time TIME,
  PRIMARY KEY (class_hours_id)
);
