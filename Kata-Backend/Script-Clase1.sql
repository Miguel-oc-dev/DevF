select * from actor;

select * from costumer;


-- WHERE is used to filter records, It is used to  extract only those records that fulfill specified condition.
select * from customer where first_name='John';

select * from customer where customer_id >= 4 and customer_id <= 100;

select * from customer where first_name='John' or first_name='Barbara';

select * from customer where first_name!='John' and first_name!='Barbara';

select * from customer where last_update > '2013-05-26 14:49:45.738'

select * from film where film_id IN (9,12,99,22,44,60,128);


-- ORDER BY is used to sort the result in ascending or descending order.
select * from film order by title desc;


-- MIN() & MAX() functions returns the smallest and the largest value of the selected column.
select min(amount) from payment;

select max(amount) from payment;

select max(amount) from payment where amount < 7;


-- the COUNT function returns the number of rows that matches a specified criterion.
select count(*) from customer;

select count(*) from actor;

select count(distinct postal_code) from address;

select rating, count(rating) from film where rating = 'PG' or rating = 'PG-13' or rating = 'NC-17' group by rating;

select rating, count(rating) from film where rating in('PG', 'PG-13', 'NC-17');



-- AVG() function returns the average value of  a numeric column.
select customer_id, avg(amount);

select customer_id, round(avg(amount), 2) from payment group by customer_id;

select customer_id, round(avg(amount), 2) from payment where amount > 5.10 
group by customer_id order by round(avg(amount), 2) desc limit 10;

