SELECT first_name, last_name, last_update FROM actor;

SELECT * FROM customer LIMIT 5;

SELECT * FROM customer LIMIT 5 OFFSET 100;

SELECT * FROM customer WHERE first_name='John';

SELECT * FROM customer WHERE customer_id>=4 AND customer_id<= 100;

SELECT * FROM customer WHERE first_name='John' OR first_name='Barbara';

SELECT * FROM customer WHERE first_name!='John' OR first_name!='Barbara';

SELECT * FROM film WHERE film_id BETWEEN 8 AND 14;



SELECT * FROM film WHERE film_id IN (9,12,99,22,44);

SELECT * FROM address WHERE address2 IS NULL;

SELECT * FROM address WHERE address2 = '';



SELECT * FROM film ORDER BY film_id;
SELECT * FROM film ORDER BY film_id DESC;

SELECT customer_id, rental_id FROM rental ORDER BY customer_id, rental_id;


SELECT COUNT(*) FROM customer;

SELECT COUNT(DISTINCT postal_code) FROM address;


SELECT rating, COUNT(rating)
FROM film
WHERE rating='PG' OR rating='PG-13'
OR rating='NC-17'
GROUP BY rating;


SELECT customer_id,
AVG(amount)
FROM payment
GROUP BY customer_id;


SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;


