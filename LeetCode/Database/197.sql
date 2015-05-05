/*
	PROBLEM: Rising Temperature

Given a Weather table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

+---------+------------+------------------+
| Id(INT) | Date(DATE) | Temperature(INT) |
+---------+------------+------------------+
|       1 | 2015-01-01 |               10 |
|       2 | 2015-01-02 |               25 |
|       3 | 2015-01-03 |               20 |
|       4 | 2015-01-04 |               30 |
+---------+------------+------------------+
For example, return the following Ids for the above Weather table:
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
*/

DROP IF EXISTS Weather;
CREATE TABLE Weather(
	Id INT(11),
	Date DATE,
	Temperature INT(11)
);

INSERT INTO Weather VALUES
(1, '2015-01-01', 10),
(2, '2015-01-02', 25),
(3, '2015-01-03', 20),
(4, '2015-01-04', 30);

/*
	SOLUTION
*/

SELECT id FROM
(SELECT a.Id AS id, a.Temperature AS t1, b.Temperature AS t2 FROM Weather AS a
LEFT JOIN Weather AS b
ON DATE_SUB(a.Date, INTERVAL 1 DAY)=b.Date) AS c
WHERE t1 IS NOT NULL AND t2 IS NOT NULL AND t1>t2;