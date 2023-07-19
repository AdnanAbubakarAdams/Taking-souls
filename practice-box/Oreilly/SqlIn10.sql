SQL - STRUCTURED QUERY LANGUAGE

-- DATABASE 
Is where structured data is stored
Think of a database as a filing cabinet that contains lots of drawers and folders
Databases are managed by Database Management System software(DBMS)
-- EXAMPLES DBMS's are DB2, MySQL, Microsoft SQL Server, Oracle, PostgresSQL   

--TABLES 
A table is wkere data of a specific type is stored
if the file cabinet is the database, file folders can be thought of as the tables
Tables are very structured => they can only contain data as specified in the table description
A table set up to store product list couldnt store customer info

-- COLUMNS
Tables are made up of columns that contain specific parts of the data (product name, product price, contact firstname, contact lastname, etc)

When a table is created, each column is defined with: 
    A name
    A datatype (which defines what type of data the column will accept)

-- ROWS 
    Rows are the data records
    Rows can be thought of as the individual pages in the file folder
When a record is added to a table, a row is added, and data is stored in each column for the new row

-- RELATIONAL DATABASE
A relational database is a data management system that stores data in lots of specific tables that are connected to each other
The connections are called relationships
SQL is the language used to work with relational data

-- KEYS 
For relational databases to work, tow important keys are needed:
    Every table should have a Primary key, the value of which uniquely identifies each and every row
    Foreign keys are used in related tables to connect the data back to the primary key in the primary table

-- DBMS fall into two broad categories
    client-server: MariaDB, Microsoft SQL server, MySQL, Oracle, PostgresSQL
    Shared-file: Access, FileMaker

    -- RETRIEVING DATA
-- USE THE SELECT STATEMENT
SELECT is used to select (retrieve) data from a database table
SELECT requires two pieces of information
SELECT 
    what to SELECT 
    where to SELECT it from
-- could be very simple SELECT column FROM table;
eg: SELECT * FROM Products; 
eg: SELECT prod_name FROM Products;
eg: SELECT prod_name, prod_id, prod_price FROM Products; will retrieve ddta according to your arrangement of colums

-- RETRIEVE DISTINCT DATA OR ROWS (to eliminate duplicates)
    SELECT DISTINCT vend_id FROM Products;

-- LIMIT RETRIEVE DATA
    SELECT prod_name FROM Products LIMIT 5;

-- NB; -- use whitespace
    whitespace makes code more readable;
        white space is ignored by the DBMS
        Use indentation, line breaks, alignment

        -- TERMINATION
    Best practices dictate that all  SQL statement be terminated with a  ;
        Usually not absolutely necessary, but use is highly recommended
    
        -- CASE INSENSITIVE 
    As general rule case does not matter in SQL
        Depending on how your DBMS is configured, case may indeed matter for object names (table names, column names, etc.)
        Pick a case convention and stick with it

    -- USE COMMENTS
        Use comments to: 
            Describe your SQL
            Prevent code from being executed ("commenting out")

-- SORTING RETRIEVED DATA
-- USE ORDER BY
    -- To specify sort order, add ORDER BY to your select statement
    -- ORDER BY requirres one piece of information
        -- the column to sort by
        -- optionally, you may also specify multiple sort colums as well as sort direction
    SELECT column FROM table ORDER BY column [ASC | DESC];
    SELECT prod_name FROM Products ORDER BY prod_name; -- this order prod_name alphabetically
    SELECT prod_name FROM Products ORDER BY prod_id; -- will order by id note that your order by any column in your table whether you are using it in your retrieval or not.

    -- SORT BY MULTIPLE COLUMNS
    SELECT prod_id, prod_name, prod_price FROM Products ORDER BY prod_price, prod_name; -- they sorted by price and alphabetical order

    SELECT prod_id, prod_name, prod_price FROM Products ORDER BY prod_price DESC; -- sorted by the most expensive to the least expensive

    NB: 
    Use SELECT ORDER BY to sort retrieved data 
    You can sort by one or more rows/columns
    Sort order can be specified for each ORDER BY row, default is ASC(ascending order)
    Best practices: 
        Never rely on default sort order, always provide an explicit sort order
        Avoid using relative column positions in ORDER BY

    --  FILTERING DATA
    
