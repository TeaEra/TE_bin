/*
	PROBLEM: Delete Duplicate Emails

Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
*/

DROP TABLE IF EXISTS Person;
CREATE TABLE Person(
	Id INT(11),
	Email VARCHAR(255),
	PRIMARY KEY(Id)
);

INSERT INTO Person(Id, Email) VALUES
(1, 'john@example.com'),
(2, 'bob@example.com'),
(3, 'john@example.com');

INSERT INTO Person(Id, Email) VALUES
(1, 'abc@efg.com'),
(2, 'abc@efg.com');

/*
	SOLUTION
*/
DELETE FROM Person WHERE Id NOT IN
(SELECT * FROM (SELECT MIN(Id) FROM Person GROUP BY Email) as a);