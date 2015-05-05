/*
	PROBLEM: Second Highest Salary

Write a SQL query to get the second highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the second highest salary is 200. If there is no second highest salary, then the query should return null.
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
	SOLUTION
*/

SELECT MAX(second_salary) AS shs FROM
(SELECT a.max_salary, b.salary AS second_salary FROM (SELECT MAX(Salary) AS max_salary FROM Employee) AS a
LEFT JOIN Employee AS b
ON a.max_salary > b.salary) AS c;