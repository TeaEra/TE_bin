/*
	PROBLEM: Department Highest Salary 

The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
The Department table holds all departments of the company.

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+
*/

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee(
	Id INT(11),
	Name VARCHAR(255),
	Salary INT(11),
	DepartmentId INT(11)
);

INSERT INTO Employee VALUES
(1, 'Joe', 70000, 1),
(2, 'Henry', 80000, 2),
(3, 'Sam', 60000, 2),
(4, 'Max', 90000, 1);

DROP TABLE IF EXISTS Department;
CREATE TABLE Department(
	Id INT(11),
	Name VARCHAR(255)
);

INSERT INTO Department VALUES
(1, 'IT'),
(2, 'Sales');

/*
	SOLUTION:
*/

SELECT d.Name AS Department, e.Name AS Employee, a.ms AS Salary FROM
(SELECT MAX(Salary) AS ms, DepartmentId AS di FROM Employee GROUP BY DepartmentId) AS a, Employee AS e, Department AS d
WHERE d.Id = a.di AND e.Salary=a.ms AND e.DepartmentId=a.di;