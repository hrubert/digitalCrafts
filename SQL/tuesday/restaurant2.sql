CREATE TABLE restaurant (
    id serial PRIMARY KEY,
    name VARCHAR,
    address VARCHAR,
    category VARCHAR
);

CREATE TABLE reviewer (
    id serial PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    karma INTEGER CHECK (karma >= 0 and karma <= 7)
);

CREATE TABLE review (
    id serial PRIMARY KEY,
    reviewer_id INTEGER REFERENCES reviewer (id),
    stars INTEGER CHECK (stars >= 1 and stars <= 5),
    title VARCHAR,
    review VARCHAR,
    restaurant_id INTEGER REFERENCES restaurant (id)
);