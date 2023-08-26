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
    USE WHERE 
        To filter returned data, add WHERE to your SELECT statement
        WHERE requires one piece of information 
            The filter condition (a statement that is tested against each row)
        eg: SELECT column FROM table WHERE condition ORDER BY column [ASC | DESC];
    USE WHERE clause operators
        Equality: =
        Non-Equality: != or <>
        Less than: <
        Less than or equal to: <=
        Greater than: >
        Greater than or equal to: >=

        SELECT prod_name, prod_price FROM Products WHERE prod_price = 3.49;
        SELECT prod_name, prod_price FROM Products WHERE prod_price < 10;
        SELECT vend_id, prod_name FROM Products WHERE vend_id != 'DLL01'; -- REMEMBER STRINGS HAVE TO BE IN QUOTES
        SELECT vend_id, prod_name FROM Products WHERE vend_id <> 'DLL01';

    FILTERING USING RANGE
        SELECT prod_name, prod_price FROM Products WHERE prod_price BETWEEN 5 AND 10;

    FILTERING for no value
        NULL is a special keyword that means that column has no value
            NULL is not the same as "" -- not same as an empty string
        WHERE can be used with NULL to find (or exclude) columns with no value
        SELECT cust_name FROM CUSTOMERS WHERE cust_email IS NULL; 

    ADVANCE DATA FILTERING
        COMBINE WHERE CLAUSES
        WHERE clauses can be combined using 
            AND (both conditions must be true)
            OR (one or more conditions must be true)
            SELECT prod_id, prod_price, prod_name FROM Products WHERE vend_id = 'DLL01' AND prod_price <= 4;
            SELECT prod_price, prod_name FROM Products WHERE vend_id = 'DLL01' OR vend_id = 'BRS01';

    ORDER OF EVALUATION
    AND ARE ALWAYS EVALUATED BEFORE OR -- BUT THERE IS A WAY AROUND IT BY PUTTING WHAT YOU WANT PROCESSED FIRST IN PARENTHESIS
    SELECT vend_id, prod_name, prod_price FROM Products WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' AND prod_price >= 10; -- wont work cos there is no order
    SELECT vend_id, prod_name, prod_price FROM Products WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01') AND prod_price >= 10; -- working
        Order of EVALUATION
        ()
        AND
        OR
        Use parenthesis to force higher level of evaluation

    FILTERING USING IN
        IN is used to specify one or more values to be matched
        IN values are comma delimited
            IN (1,2,3)

    FILTERING USING LIKE
        Use LIKE to search using a wildcard
            % to match zero or more characters
            _ to match a single characters
            [] to match one of a list of specified characters
                [^] to negate the match
                [] is not widely supported
        SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE 'Fish%';-- text to match has to begin with fish but can be followed by anything
        SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE 'F%y%';
        SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '%bean bag%';--word in the middle of a string
        SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '__ inch teddy bear';--matches exactly one

    SUMMARY 
        Use AND and OR to combine WHERE clauses
        Use parenthesis to explicitly control order of evaluation
        Use IN to provide a list of values to be matched
        Use NOT to negate WHERE clause
        -- BEST PRACTICES: Always use parenthesis to avoid precedence ambiguity

    CREATING CALCULATED FIELDS(COLUMS)/ DERIVED FIELS -- DONT EXIST BUT CREATED ON THE FLY
    USE CONCATENATION
        use to append column to each other
        SELECT vend_name || ' (' || vend_country || ')' FROM Vendors ORDER BY vend_name;

    USING ALIASES -- IS TO GIVE SOMETHING A TEMPORARY NAME OR A VIRTUAL NAME FOR THE DURATION OF SQL EXCUTIONS
        Aliases are used to name database objects: 
            Tables
            columns
            Calculated fields
            SELECT vend_name || ' (' || vend_country || ')' AS vend_title FROM Vendors ORDER BY vend_name;
        TO PERFORM MATHEMATICAL CALCULATIONS
            SELECT statements can be used to perform CALCULATIONS  
                Additions: +
                Substraction: -
                Multiplication: *
                Division: /
            When performing calculations, aliases can be used to name results
            SELECT prod_id, quantity, item_price FROM OrderItems WHERE order_num = 20008;
            SELECT prod_id, quantity, item_price, quantity*item_price AS expanded_price FROM OrderItems WHERE order_num = 20008;

    DATE FUNCTIONS 
    USE DATE FUNCTIONS
        Date functions are used to 
            Extract parts of dates and times
            Compare date and time values
            Format dates and times for locale and language specific display
            SELECT order_num FROM Orders WHERE YEAR(order_date) = 2012;

    USE AGGREGATE FUNCTIONS
    Frequently used aggregate functions are 
        AVG() -- AVERAGE
        COUNT()
        MAX()
        MIN()
        SUM()
        SELECT AVG (prod_price) AS avg_price FROM Products; -- will return one row with one column with the average price
        SELECT AVG (prod_price) AS avg_price FROM Products WHERE vend_id = 'DLL01';
        SELECT COUNT(*) AS num_cust FROM Customers;
        SELECT COUNT(cust_email) AS num_cust FROM Customers; -- count can either take a column name or a wild card *
        SELECT MAX(prod_price) AS max_price FROM Products; -- returns the maximum value
        SELECT MIN(prod_price) AS min_price FROM Products;
        SELECT SUM(quantity) AS items_ordered FROM OrderItems WHERE order_num = 20005;
        SELECT SUM(item_price*quantity) AS total_price FROM OrderItems WHERE order_num = 20005;

    GROUPING DATA
    USE GROUP BY
        GROUP BY is used to summarize data by GROUP 
            A group is a unique column value
            SELECT column FROM table WHERE condition GROUP BY column ORDER BY column [ASC | DESC];
            SELECT vend_id, COUNT(*) AS num_prods FROM Products GROUP BY vend_id;
    USE HAVING
        HAVING is used to filter results at the group level
            HAVING is passed a filter statement, just like WHERE
            SELECT column FROM table WHERE condition GROUP BY column HAVING condition ORDER BY column [ASC | DESC];
            SELECT cust_id, COUNT(*) AS orders FROM Orders GROUP BY cust_id HAVING COUNT(*) >= 2;
        WHERE VS HAVING
            WHERE filters before data is grouped, and HAVING filters after data is grouped.
            ROWS that are eliminated by a WHERE clause will not be included in the group.
            SELECT vend_id, COUNT(*) AS num_prods FROM Products WHERE prod_price >= 4 GROUP BY vend_id HAVING COUNT(*) >= 2;

    WORKING WITH SUBQUERIES
        USE WHERE WITH SUBQUERIES
        A WHERE clause filters data retrived by SELECT
        Subqueries allow the result of one query to be used as filter conditions for another query


    JOINING TABLES
            PRIMARY AND FOREIGN KEYS
            Tables are usually joined by keys
            A primary key uniquely identifies every row in a table
                There can only ever be one of each primary key value
            A foreign key in a table contains the primary key value of a related table
                Multiple rows in table can have same foreign key value
        
        CREATE A BASIC JOINING
        The simplest join requires two tables that share key which are tested for Equality
            Primary key in one table
            Foreign key in another table
        This is called an equijoin or an INNER JOIN
        SELECT vend_name, prod_name, prod_price FROM Vendors, Products WHERE Vendors.vend_id = Products.vend_id;

        JOIN MULTIPLE TABLES
        SELECT prod_name, vend_name, prod_price, quantity FROM OrderItems, Products, Vendors WHERE Products.vend_id = Vendors.vend_id AND OrderItems.prod_id = Products.prod_id AND order_num = 20007;

        SELECT cust_name, cust_contact FROM Customers, Orders, OrderItems WHERE Customers.cust_id = Orders.cust_id AND OrderItems.order_num = Orders.order_num AND prod_id = 'RGAN01';
    NB: Joins are the glue that hold relational tables together
        For joins to work, primary and foreign keys must bee defined (and used)
        The simplest join is an equijoin(also called inner join)
        As per ANSI SQL specification, the longer inner join syntax is preferred over the equijoin syntax
        All DBMSs support both syntaxes

        ADVANCED JOINS
        USE TABLE ALIASES
            Previously aliases were used to name (or rename) columns
            Aliases can also be used to rename tables
            SELECT cust_name, cust_contact FROM Customers AS C, Orders AS O, OrderItems AS OI WHERE C.cust_id = O.cust_id AND OI.order_num = O.order_num AND prod_id = 'RGAN01'
        
        CREATE A SELF JOIN
        A self join is used to join a table to itself
        When using self joins aliases must be used to uniquely name each table instance
        SELECT c1.cust_id, c1.cust_name, c1.cust_contact FROM Customers AS c1, Customers AS c2 WHERE c1.cust_name = c2.cust_name AND c2.cust_contact = 'Jim Jones';

        SELECT C.*, O.order_num, O.order_date, OI.prod_id, OI.quantity, OI.item_price FROM Customers AS C, Orders AS O, OrderItems AS OI WHERE C.cust_id = O.cust_id AND OI.order_num  = O.order_num AND prod_id = 'RGAN01';

        CREATE AN OUTER JOIN
            An equijoin or inner join joins two tables and only retrieves rows that have related rows in the other table
            An outer join makes it possible to retrieve all the rows from one table regardless of whether or not they have related rows in the other table

            SELECT Customers.cust_id, Orders.order_num FROM Customers LEFT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id;

            SELECT Customers.cust_id, Orders.order_num FROM Customers RIGHT OUTER JOIN Orders ON Orders.cust_id = Customers.cust_id ;
        
        USE JOINS WITH AGGREGATE FUNCTIONS
        SELECT Customers.cust_id, COUNT(Orders.order_num) AS num_ord FROM Customers INNER JOIN Orders ON Customers.cust_id = Orders.cust_id GROUP BY Customers.cust_id;
        -- outer join TO RETURN CUSTOMERS WITH NO ORDERS
        SELECT Customers.cust_id, COUNT(Orders.order_num) AS num_ord FROM Customers LEFT OUTER JOIN Orders ON Customers.cust_id = Orders.cust_id GROUP BY Customers.cust_id;

        COMBINE QUERIES
        USE UNIONS
            To use a UNION, provide both complete queries with the keyword UNION between them
            SELECT cust_name, cust_contact, cust_email FROM Customers WHERE cust_state IN ('IL', 'IN', 'MI') UNION 
            SELECT cust_name, cust_contact, cust_email FROM Customers WHERE cust_name = 'Fun4All'


    INSERTING DATA
        INSERT A ROWS
            Rows are inserted using the INSERT statement
                INSERT requires that the new values be specified
                INSERT can also accept the names of the columns for which values are specified
                INSERT INTO Customers(cust_id, cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email) VALUES ('1000000006', 'Toy Land', '123 Any Street', 'New York', 'NY', '11111', 'USA', NULL, NULL);

        INSERT RETRIEVED DATA
            To insert data retrieved as a query use an INSERT SELECT combination
            The SELECT must return the same number of columns as specified in INSERT
                column names need not to be the same
                column data types must be compatible
                INSERT INTO Customers(cust_id, cust_contact,  cust_email, cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country) SELECT cust_id, cust_contact,  cust_email, cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country FROM CustNew;
        
        COPY TO ANOTHER TABLE
            To copy data from one table to another use SELECT INTO
            SELECT * INTO CustCopy FROM Customers;

    NB: INSERT is used to insert a single row into a table
        INSERT can be combined with SELECT to SELECT to insert multiple rows (query results)
        SELECT INTO copies rows to another table
            Best practices:
            Always specify INSERT column names
            If using INSERT SELECT, explicitly specify SELECT column names (no SELECT *)

    UPDATING AND DELETING DATA
        UPDATE A ROWS
        nb: update and delete are very dangerous statements
            it is far to easy to update or delete the wrong rows 
            there is no undo
        
        Rows are updated using the UPDATE statement
            UPDATE takes the name of the table to update
            SET is used to provide one or more name = value pairs with the column to be updated
            A WHERE statement specifies which rows are to be updated 
                Omit the WHERE  and every single row in the table will be updated

                UPDATE Customers SET cust_email = 'adnan@manchesterunited.com' WHERE cust_id = '100000005';

                UPDATE Customers SET cust_contact = 'Adnan Rondo', cust_email = 'adnan@manchesterunited.com' WHERE cust_id = '100000005';

        DELETE A ROW
            Rows are deleted using the DELETE statement
            DELETE takes the name of the table to deleted
            A WHERE statement specifies which rows are to be deleted 
                Omit the WHERE  and every single row in the table will be deleted

                DELETE FROM Customers WHERE cust_id = '1000000006'
    
    SUMMARY OF UPDATE AND DELETE
        UPDATE is used to update one or more rows in a table
        DELETE is used to delete one or more rows from a table
        UPDATE and DELETE use WHERE to specify affected rows
        Best practices: 
            Whenever possible, use primary keys for UPDATE and DELETE WHERE clause
            Test the WHERE clause with SELECT before using it with UPDATE or DELETE
            Foreign keys can help prevent accidental deletions
            






