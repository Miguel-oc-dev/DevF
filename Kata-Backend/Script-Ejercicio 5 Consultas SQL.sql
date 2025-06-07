-- 1. Selecciona las columnas film_id y title de la tabla film.
SELECT film_id, title FROM film;

-- 2. Seleccionar 5 filas de la tabla film, obteniendo todas las columnas.
SELECT film_id, title, description, release_year, language_id FROM film;

-- 3. Seleccionar las filas de la tabla film donde el film_id es menor qué 4.
SELECT * FROM film WHERE film_id <= 4;

-- 4. Seleccionar las filas de la tabla actor donde su nombre sean: Angela, Angelina, o Audrey usando IN.
SELECT * FROM actor WHERE first_name IN('Angela', 'Angelina', 'Audry');

-- 5. Obtenga una lista de actores con el nombre de Julia.
SELECT * FROM actor WHERE first_name IN('Julia');

-- 6. Obtenga una lista de actores con el nombre Chris, Cameron o Cuba.
SELECT * FROM actor WHERE first_name IN('Chris', 'Cameron', 'Cuba');

-- 7. Seleccione la fila del cliente para el cliente llamado Jamie Rice.
SELECT * FROM customer WHERE first_name IN('Jamie') AND last_name = 'Rice';

-- 8. Seleccione el monto y la fecha de pago del pago fue inferior a $ 1.
SELECT amount, payment_date FROM payment WHERE amount < 1;

-- 9. ¿Cuáles son los ID de los últimos 3 clientes para devolver un alquiler?
SELECT DISTINCT customer_id FROM rental ORDER BY customer_id DESC LIMIT 3; 

-- 10. ¿Cuántas películas tienen la clasificación NC-17, PG y PG-13?
SELECT title, rating FROM film WHERE rating IN('NC-17', 'PG', 'PG-13') ORDER BY rating;

-- 11. ¿Qué film (id) tiene más actores?
SELECT DISTINCT * FROM film_actor ORDER BY film_id DESC LIMIT 10;

-- 12. ¿Qué actor (id) aparece en más películas?
SELECT DISTINCT * FROM film_actor ORDER BY actor_id DESC LIMIT 10;

-- 13. ¿Cuáles son los diferentes periodos de renta que permite la tienda?
SELECT DISTINCT (return_date - rental_date) AS rental_period_days FROM rental;

-- 14. ¿Cuál es el costo de reemplazo promedio de las películas por rating?
SELECT rating, AVG(replacement_cost) AS avg_replacement_cost
FROM film
GROUP BY rating
ORDER BY rating;

-- Query para ver todas las tablas
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE';


SELECT * FROM film;

-- Tablas
city
country
customer
film_actor
film_category
inventory
language
rental
staff
payment
film
