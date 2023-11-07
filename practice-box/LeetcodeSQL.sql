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

1757. Recyclable and Low Fat Products
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

584. Find Customer Referee
Table: Customer
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
In SQL, id is the primary key column for this table.
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.
Find the names of the customer that are not referred by the customer with id = 2.
Return the result table in any order.
The result format is in the following example.
Example 1:
Input: 
Customer table:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
Output: 
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
# Write your MySQL query statement below
SELECT name from Customer WHERE referee_id is null OR referee_id != 2;

175. Combine Two Tables
Table: Person
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
personId is the primary key (column with unique values) for this table.
This table contains information about the ID of some persons and their first and last names.
Table: Address
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
addressId is the primary key (column with unique values) for this table.
Each row of this table contains information about the city and state of one person with ID = PersonId.
 

Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.
Return the result table in any order.

The result format is in the following example.
Example 1:
Input: 
Person table:
+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address table:
+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
Output: 
+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
Explanation: 
There is no address in the address table for the personId = 1 so we return null in their city and state.
addressId = 1 contains information about the address of personId = 2.
SELECT person.firstName, person.lastName, address.city, address.state FROM Person LEFT JOIN Address ON Person.personId = address.personId;


182. Duplicate Emails
Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
 

Write a solution to report all the duplicate emails. Note that its guaranteed that the email field is not NULL.
Return the result table in any order.
The result format is in the following example.
Example 1:
Input: 
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
Output: 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Explanation: a@b.com is repeated two times.
SELECT email AS Email FROM Person GROUP BY email HAVING COUNT(email) > 1;

196. Delete Duplicate Emails
Table: Person
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.
For SQL users, please note that you are supposed to write a DELETE statement and not a SELECT one.
For Pandas users, please note that you are supposed to modify Person in place.
After running your script, the answer shown is the Person table. The driver will first compile and run your piece of code and then show the Person table. The final order of the Person table does not matter.
The result format is in the following example.
Example 1:
Input: 
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.
DELETE p1 FROM Person p1
JOIN Person p2
WHERE
p1.id > p2.id AND
p1.Email = p2.Email;


183. Customers Who Never Order
Table: Customers
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.
Table: Orders
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
Write a solution to find all customers who never order anything.
Return the result table in any order.
The result format is in the following example.
SELECT name as Customers FROM customers
WHERE (SELECT COUNT(*) FROM orders WHERE customerId = customers.id) < 1;

181. Employees Earning More Than Their Managers
Table: Employee
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.
Write a solution to find the employees who earn more than their managers.
Return the result table in any order.
The result format is in the following example.
Example 1:
Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.
SELECT E1.name AS Employee FROM Employee E1
JOIN Employee E2
WHERE 
E1.salary > E2.salary AND 
E2.id = E1.managerId;