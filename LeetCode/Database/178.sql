/*
	PROBLEM: Rank Scores
	
Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.

+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
For example, given the above Scores table, your query should generate the following report (order by highest score):

+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
*/

DROP TABLE IF EXISTS Scores;
CREATE TABLE Scores(
	Id INT(11),
	Score FLOAT(6,3)
);

INSERT INTO Scores VALUES
(1, 3.50),
(2, 3.65),
(3, 4.00),
(4, 3.85),
(5, 4.00),
(6, 3.65);

/*
	SOLUTION:
*/

SELECT a.Score, a.Rank FROM
(
SELECT Score, @currRank:=@currRank + IF(@prevNum=Score, 0, 1) AS rank, @prevNum:=Score FROM
(SELECT Score FROM Scores ORDER BY Score DESC) AS s, (SELECT @currRank:=0) AS r, (SELECT @prevNum:=NULL) AS p
) AS a;