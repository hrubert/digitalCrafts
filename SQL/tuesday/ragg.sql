-- List all the reviews for a given restaurant given a specific restaurant ID.

-- SELECT review FROM review WHERE restaurant_id = 8;

-- List all the reviews for a given restaurant, given a specific restaurant name.

-- SELECT
--     review
-- FROM
--     restaurant
-- JOIN
--     review ON review.restaurant_id = restaurant.id
-- WHERE
--     restaurant.name = 'Cafe TH';

-- List all the reviews for a given reviewer, given a specific author name.

-- SELECT
--     review
-- FROM
--     reviewer
-- JOIN
--     review ON review.reviewer_id = reviewer.id
-- WHERE
--     reviewer.name = 'Tracy Herbert';

-- List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.

-- SELECT
--     name,
--     review
-- FROM
--     review
-- JOIN
--     restaurant ON restaurant.id = review.restaurant_id;

-- Get the average stars by restaurant. The result should have the restaurant name and its average star rating.

-- SELECT
--     name,
--     avg(stars)
-- FROM
--     restaurant
-- JOIN
--     review on review.restaurant_id = restaurant.id
-- GROUP BY
--     name;

-- Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.

-- SELECT
--     name,
--     count(review.id)
-- FROM
--     restaurant
-- LEFT OUTER JOIN
--     review on review.restaurant_id = restaurant.id
-- GROUP BY
--     name;

-- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name.

-- SELECT
--     restaurant.name,
--     review.review,
--     reviewer.name
-- FROM
--     review
-- JOIN
--     restaurant on restaurant.id = review.restaurant_id
-- JOIN
--     reviewer on reviewer.id = review.reviewer_id;

-- Get the average stars given by each reviewer. (reviewer name, average star rating)

-- SELECT
--     name,
--     avg(stars)
-- FROM
--     reviewer
-- JOIN
--     review ON review.reviewer_id = reviewer.id 
-- GROUP BY
--     name;

-- Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)

-- SELECT
--     name,
--     min(stars)
-- FROM
--     reviewer
-- JOIN
--     review ON review.reviewer_id = reviewer.id 
-- GROUP BY
--     name;

-- Get the number of restaurants in each category. (category name, restaurant count)

-- SELECT
--     category,
--     count(category)
-- FROM
--     restaurant
-- GROUP BY
--     category

-- Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)

-- SELECT
--     name,
--     count(stars) FILTER (WHERE stars = 5)
-- FROM
--     restaurant
-- LEFT OUTER JOIN
--     review on review.restaurant_id = restaurant.id
-- GROUP BY
--     name;

-- Get the average star rating for a food category. (category name, average star rating)

-- SELECT
--     category,
--     avg(stars)
-- FROM
--     restaurant
-- LEFT OUTER JOIN
--     review on review.restaurant_id = restaurant.id
-- GROUP BY
--     category;