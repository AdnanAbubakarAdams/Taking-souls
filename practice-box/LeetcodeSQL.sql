-- NOTES
-- RDBMS stands for Relational Database Management System.
-- Every table is broken up into smaller entities called fields. A field is a column in a table that is designed to maintain specific information about every record in the table.
-- A record, also called a row, is each individual entry that exists in a table. For example, there are 91 records in the above Customers table. A record is a horizontal entity in a table.
-- A column is a vertical entity in a table that contains all information associated with a specific field in a table.

-- The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.
-- Note: The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!

--  Some of The Most Important SQL Commands
--  SELECT - extracts data from a database
--  UPDATE - updates data in a database
--  DELETE - deletes data from a database
--  INSERT INTO - inserts new data into a database
--  CREATE DATABASE - creates a new database
--  ALTER DATABASE - modifies a database
--  CREATE TABLE - creates a new table
--  ALTER TABLE - modifies a table
--  DROP TABLE - deletes a table
--  CREATE INDEX - creates an index (search key)
--  DROP INDEX - deletes an index

--  select all customers from the customer table
SELECT * FROM  Customers

--  selecting customername, address, city from customer table
SELECT CustomerName, Address, City FROM Customers;

-- select all distinct country from the customer table i.e excluding duplicates or selecting to match precise search
SELECT DISTINCT Country FROM Customers;

-- select customers where customers come from mexico
SELECT * FROM Customers WHERE Country = "Mexico";

-- select a single customer with their ID
SELECT * FROM Customers WHERE CustomerId = 1;

-- SQL statement lists the number of different (distinct) customer countries
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);

-- 183. Customers Who Never Order
SELECT name as Customers FROM customers
WHERE (SELECT COUNT(*) FROM orders WHERE customerId = customers.id) < 1;

-- 595. Big Countries
SELECT name, area, population from world where area >= 3000000 OR population >= 25000000

-- 1757. Recyclable and Low Fat Products
Table: Products
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id is the primary key (column with unique values) for this table.
low_fats is an ENUM (category) of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
recyclable is an ENUM (category) of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.
Write a solution to find the ids of products that are both low fat and recyclable.
Return the result table in any order.
The result format is in the following example.
Example 1:
Input: 
Products table:
+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
Output: 
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
Explanation: Only products 1 and 3 are both low fat and recyclable.
# Write your MySQL query statement below
SELECT DISTINCT product_id FROM Products WHERE low_fats = "Y" AND recyclable = "Y";