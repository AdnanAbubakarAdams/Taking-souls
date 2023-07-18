-- SQL - STRUCTURED QUERY LANGUAGE

-- DATABASE 
-- Is where structured data is stored
-- -- Think of a database as a filing cabinet that contains lots of drawers and folders
-- Databases are managed by Database Management System software(DBMS)
-- --EXAMPLES => DBMS's are DB2, MySQL, Microsoft SQL Server, Oracle, PostgresSQL   

--TABLES 
-- A table is wkere data of a specific type is stored
-- -- if the file cabinet is the database, file folders can be thought of as the tables
-- Tables are very structured => they can only contain data as specified in the table description
-- -- A table set up to store product list couldnt store customer info

-- COLUMNS
-- Tables are made up of columns that contain specific parts of the data (product name, product price, contact firstname, contact lastname, etc)

-- When a table is created, each column is defined with: 
    -- A name
    -- A datatype (which defines what type of data the column will accept)

-- ROWS 
    -- Rows are the data records
    -- Rows can be thought of as the individual pages in the file folder
-- When a record is added to a table, a row is added, and data is stored in each column for the new row

-- RELATIONAL DATABASE
-- A relational database is a data management system that stores data in lots of specific tables that are connected to each other
-- The connections are called relationships
-- SQL is the language used to work with relational data

-- KEYS 
-- For relational databases to work, tow important keys are needed:
    -- Every table should have a Primary key, the value of which uniquely identifies each and every row
    -- Foreign keys are used in related tables to connect the data back to the primary key in the primary table

-- DBMS fall into two broad categories
    -- client-server: MariaDB, Microsoft SQL server, MySQL, Oracle, PostgresSQL
    -- Shared-file: Access, FileMaker
    