/*
	PROBLEM: Employees Earning More Than Their Managers

The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

+----------+
| Employee |
+----------+
| Joe      |
+----------+
*/

DROP IF EXISTS Employee;
CREATE TABLE Employee (
	Id INT(11) NOT NULL AUTO_INCREMENT,
	Name VARCHAR(255),
	Salary INT(11),
	ManagerId INT(11),
	PRIMARY KEY(Id)
);

INSERT INTO Employee(Id, Name, Salary, ManagerId) VALUES
(1, 'Joe', 70000, 3),
(2, 'Henry', 80000, 4),
(3, 'Sam', 60000, NULL),
(4, 'Max', 90000, NULL);

/*
	SOLUTION
*/

SELECT name
FROM
(SELECT a.Name AS name, a.Salary AS s1, b.Salary AS s2 FROM Employee AS a
LEFT JOIN Employee AS b
ON a.ManagerId=b.id) AS c WHERE s1 IS NOT NULL AND s2 IS NOT NULL AND s1>s2;