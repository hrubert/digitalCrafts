-- CREATE TABLE author (
--     id serial PRIMARY KEY,
--     name varchar
-- );

-- CREATE TABLE article (
--     id serial PRIMARY KEY,
--     title varchar,
--     author_id INTEGER REFERENCES author (id)
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Jeff'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Matt'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Keith'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Sam'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Eric'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Tracy'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Melissa'
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Cats', 1
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Dogs', 1
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Chickens', 1
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Birds', 1
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Cats', 2
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Dogs', 2
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Chickens', 2
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Birds', 2
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Cats', 3
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Dogs', 3
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Chickens', 3
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Birds', 3
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Cats', 4
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Dogs', 4
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Chickens', 4
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Birds', 4
-- );

-- SELECT * FROM article WHERE author_id = 1;

-- Inner join

-- SELECT * 
-- FROM author
-- INNER JOIN article on author.id = article.author_id;

-- SELECT * FROM article, author WHERE article.author_id = author.id AND author.name = 'Sam';

-- Outer join

-- SELECT * FROM article
-- LEFT OUTER JOIN author
-- on article.author_id = author.id;

-- SELECT * FROM article
-- RIGHT OUTER JOIN author
-- on article.author_id = author.id;

-- SELECT author.id, author.name, count(article.id) FROM article
-- RIGHT OUTER JOIN author
-- ON article.author_id = author.id
-- GROUP BY author.id;

CREATE DATABASE projects_db
