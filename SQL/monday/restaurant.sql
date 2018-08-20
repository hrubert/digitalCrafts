-- CREATE TABLE restaurant (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR(50),
--     distance NUMERIC,
--     stars INTEGER,
--     category VARCHAR(50),
--     favorite_dish VARCHAR,
--     does_takeout BOOLEAN,
--     last_time_ate DATE
-- )

-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Chipotle', 1.5, 4, 'mexican', 'burrito', TRUE, '2018-02-15'
-- );

-- UPDATE restaurant SET stars = 4 WHERE id = 6;

-- SELECT name FROM restaurant WHERE stars = 5;
-- SELECT favorite_dish FROM restaurant WHERE stars = 5;
-- SELECT id FROM restaurant WHERE name = 'Seaside Poke';
-- SELECT * FROM restaurant WHERE category = 'BBQ';
-- SELECT * FROM restaurant WHERE does_takeout = TRUE;
-- SELECT * FROM restaurant WHERE does_takeout = TRUE AND category = 'BBQ';
-- SELECT * FROM restaurant WHERE distance < 2;
-- SELECT * FROM restaurant WHERE last_time_ate < '2018-08-13';
-- SELECT * FROM restaurant WHERE last_time_ate < '2018-08-13' AND stars = 5;


-- Aggregation exercises
-- SELECT * FROM restaurant ORDER BY distance;
-- SELECT * FROM restaurant ORDER BY distance LIMIT 2;
-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;
-- SELECT * FROM restaurant WHERE distance < 2 ORDER BY stars DESC LIMIT 2;
-- SELECT COUNT(*) FROM restaurant;
-- SELECT COUNT(*) FROM restaurant WHERE category = 'mexican';
-- SELECT AVG(stars) FROM restaurant WHERE category = 'american';
-- SELECT MAX(stars) FROM restaurant WHERE category = 'mexican';

