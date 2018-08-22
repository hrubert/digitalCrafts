-- CREATE TABLE album (
--     id serial PRIMARY KEY,
--     title VARCHAR,
--     artist VARCHAR,
--     release_year DATE
-- );

-- CREATE TABLE song (
--     id serial PRIMARY KEY,
--     title VARCHAR,
--     duration TIME,
--     songwriter VARCHAR
-- );

-- CREATE TABLE song_album (
--     id serial PRIMARY KEY,
--     album_id INTEGER REFERENCES album (id),
--     song_id INTEGER REFERENCES song (id),
--     track_no INTEGER
-- );

-- 1. What are tracks for a given album?

-- SELECT
--     song.title
-- FROM
--     album
-- JOIN
--     song_album ON song_album.album_id = album.id
-- JOIN
--     song ON song.id = song_album.song_id
-- WHERE
--     album.title = 'The Velvet Underground & Nico';
    
-- 2. What are the albums produced by a given artist?

-- SELECT
--     title
-- FROM
--     album
-- WHERE
--     artist = 'David Bowie';

-- 3. What is the track with the longest duration?

-- SELECT
--     *
-- FROM
--     song
-- WHERE
--     duration = (
--         SELECT
--             MAX (duration)
--         FROM
--             song
-- );

-- 4. What are the albums released in the 60s? 70s? 80s? 90s?

-- SELECT
--     title
-- FROM
--     album
-- WHERE
--     release_year BETWEEN 1970 AND 1980

-- How many albums did a given artist produce in the 70s?

-- SELECT
--     count(title)
-- FROM
--     album
-- WHERE
--     release_year BETWEEN 1970 AND 1980
-- AND 
--     artist = 'David Bowie';

-- 6. What is each artist's latest album


-- SELECT 
--     DISTINCT ON (artist) *
-- FROM
--     album
-- ORDER BY
--     artist,
--     release_year DESC;


-- 7. List all albums along with its total duration based on summing the duration of its tracks

-- SELECT
--     album.title,
--     sum(duration)
-- FROM
--     album
-- JOIN
--     song_album ON song_album.album_id = album.id
-- JOIN
--     song on song.id = song_album.song_id
-- GROUP BY
--     album.title;

-- 8. What is the album with the longest duration?

-- SELECT
--     max(sum)
-- FROM
--     (SELECT
--         album.title,
--         sum(duration)
--     FROM
--         album
--     JOIN
--         song_album ON song_album.album_id = album.id
--     JOIN
--         song on song.id = song_album.song_id
--     GROUP BY
--         album.title) as album_duration

--9 Who are the 5 most prolific artists based on the number of albums they have recorded?

-- SELECT
--     artist,
--     count(album.title)
-- FROM
--     album
-- GROUP BY
--     artist
-- ORDER BY
--     count DESC
-- LIMIT 5;

-- 10. What are all the tracks a given artist has recorded?

-- SELECT
--     song.title
-- FROM
--     album
-- JOIN
--     song_album ON song_album.album_id = album.id 
-- JOIN
--     song on song.id = song_album.song_id
-- WHERE
--     artist = 'David Bowie';

-- 11. What are the top 5 most often recorded songs?

-- SELECT
--     title,
--     count(song_id)
-- FROM
--     song_album
-- JOIN
--     song ON song.id = song_album.song_id
-- GROUP BY
--     title
-- ORDER BY
--     count DESC
-- LIMIT 5;

-- 12. Who are the top 5 song writers whose songs have been most often recorded?

-- SELECT
--     songwriter,
--     count(song_id)
-- FROM
--     song_album
-- JOIN
--     song ON song.id = song_album.song_id
-- GROUP BY
--     songwriter
-- ORDER BY
--     count DESC
-- LIMIT 5;

-- 15. Who are the song writers whose songs a given artist has recorded?

-- SELECT
--     distinct songwriter
-- FROM
--     album
-- JOIN
--     song_album ON song_album.album_id = album.id 
-- JOIN
--     song on song.id = song_album.song_id
-- WHERE
--     artist = 'Fleetwood Mac'