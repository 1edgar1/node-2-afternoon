CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(60) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
)