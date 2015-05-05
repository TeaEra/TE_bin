/*
	PROBLEM: Consecutive Numbers 

Write a SQL query to find all numbers that appear at least three times consecutively.

+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.
*/

DROP TABLE IF EXISTS Logs;
CREATE TABLE Logs(
	Id INT(11),
	Num INT(11)
);

INSERT INTO Logs(Id, Num) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 1),
(6, 2),
(7, 2);

/*
	SOLUTION:
*/

SELECT DISTINCT num AS Num FROM
(
SELECT num, rank, COUNT(rank) AS cnt FROM
(
SELECT l.Num AS num, @currRank:=@currRank + IF(@prevNum=num, 0, 1) AS rank, @prevNum:=num FROM
Logs AS l, (SELECT @currRank:=0) AS r, (SELECT @prevNum:=NULL) AS p
) AS a GROUP BY rank HAVING cnt>=3
) tmp;

/*
	Having ???
*/