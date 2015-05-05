/*
	PROBLEM: Nth Highest Salary

Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.
*/

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee(
	Id INT(11),
	Salary INT(11)
);

INSERT INTO Employee(Id, Salary) VALUES
(1, 100),
(2, 200),
(3, 300);

/*
	SOLUTION:
*/

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      SELECT Salary FROM (
		  SELECT s.Salary AS Salary, @currRank:=@currRank+1 AS rank FROM
		  (SELECT Salary FROM Employee ORDER BY Salary DESC) s, (SELECT @currRank:=0) r
	  ) a WHERE a.rank=N;
  );
END

SELECT Salary FROM (
SELECT s.Salary AS Salary, @currRank:=@currRank+1 AS rank FROM
(SELECT Salary FROM Employee ORDER BY Salary DESC) s, (SELECT @currRank:=0) r
) a WHERE rank=1;  -- 1 or 2 or 3

/*
	TODO: uncomplete!!!
*/