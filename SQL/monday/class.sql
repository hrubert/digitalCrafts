-- DROP TABLE student;

-- CREATE TABLE student (
--     name VARCHAR,
--     website VARCHAR,
--     points INTEGER,
--     gender CHAR(1)
-- )

-- INSERT INTO student VALUES (
--     'Paul', 'pizzapanther', 5, 'M'
-- );

-- INSERT INTO student(name, points) VALUES (
--     'Levi', 8
-- );

-- CREATE TABLE student2 (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR,
--     github VARCHAR,
--     points NUMERIC,
--     start_date DATE,
--     graduated boolean
-- )

-- INSERT INTO student2 VALUES (
--     Default, 'Levi', 'hrubert', 100, '2017-04-17', FALSE
-- );

-- INSERT INTO student2 VALUES (
--     Default, 'Jessica', 'hrubert', 100, '2017-04-17', FALSE
-- );

-- INSERT INTO student2 VALUES (
--     Default, 'John', 'hrubert', 100, '2017-04-17', FALSE
-- );

-- INSERT INTO student2 VALUES (
--     Default, 'Paul', 'hrubert', 100, '2017-04-17', FALSE
-- );

-- INSERT INTO student2 VALUES (
--     Default, 'Skittles', 'hrubert', 100, '2017-04-17', FALSE
-- );

UPDATE student2 SET name = 'Levi Herbert' WHERE id = 2;