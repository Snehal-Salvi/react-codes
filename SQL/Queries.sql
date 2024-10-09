-- SQL Queries for emp and department Tables

-- 1. Create a department table
-- Question: How do you create a table named 'department' to store department information?
CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,  -- Primary Key
    department_name VARCHAR(100) NOT NULL UNIQUE    -- Unique department name, cannot be null
);

-- 2. Create an emp table
-- Question: How do you create a table named 'emp' to store employee information?
CREATE TABLE emp (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,            -- Primary Key
    first_name VARCHAR(50) NOT NULL,                 -- First Name, cannot be null
    last_name VARCHAR(50) NOT NULL,                  -- Last Name, cannot be null
    job_title VARCHAR(100) NOT NULL,                 -- Job Title, cannot be null
    salary DECIMAL(10, 2) CHECK (salary >= 0),      -- Salary must be non-negative
    hire_date DATE NOT NULL,                         -- Hire Date, cannot be null
    department_id INT,                               -- Foreign Key referencing department_id
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_id) 
);

-- 3. Add a new column to emp table
-- Question: How do you add a column named 'email' to the emp table?
ALTER TABLE emp ADD email VARCHAR(100);

-- 4. Modify an existing column in emp table
-- Question: How do you change the data type of the 'salary' column to allow higher values?
ALTER TABLE emp MODIFY salary DECIMAL(15, 2);  -- Adjust precision and scale

-- 5. Drop a column from emp table
-- Question: How do you remove the 'email' column from the emp table?
ALTER TABLE emp DROP COLUMN email;

-- 6. Insert a new department
-- Question: How do you insert a new department into the department table?
INSERT INTO department (department_name) VALUES ('Human Resources');

-- 7. Insert a new employee
-- Question: How do you insert a new employee into the emp table?
INSERT INTO emp (first_name, last_name, job_title, salary, hire_date, department_id) 
VALUES ('John', 'Doe', 'Software Engineer', 60000, '2023-01-15', 1);

-- 8. Select all employees
-- Question: How can you retrieve all records from the emp table?
SELECT * FROM emp;

-- 9. Select employees from a specific department
-- Question: How do you find all employees who work in department ID 1?
SELECT * FROM emp WHERE department_id = 1;

-- 10. Join employees with departments
-- Question: How can you retrieve a list of employees along with their department names?
SELECT emp.first_name, emp.last_name, department.department_name
FROM emp
JOIN department ON emp.department_id = department.department_id;

-- 11. Count employees in each department
-- Question: How can you count the number of employees in each department?
SELECT department.department_name, COUNT(emp.emp_id) AS employee_count
FROM department
LEFT JOIN emp ON department.department_id = emp.department_id
GROUP BY department.department_name;

-- 12. Find highest paid employee
-- Question: How do you find the employee with the highest salary?
SELECT * FROM emp ORDER BY salary DESC LIMIT 1;

-- 13. Update employee salary
-- Question: How do you update the salary of an employee with emp_id 1 to 75000?
UPDATE emp SET salary = 75000 WHERE emp_id = 1;

-- 14. Delete an employee record
-- Question: How can you delete an employee record from the emp table with emp_id 3?
DELETE FROM emp WHERE emp_id = 3;

-- 15. Find employees hired after a certain date
-- Question: How do you find all employees who were hired after January 1, 2022?
SELECT * FROM emp WHERE hire_date > '2022-01-01';

-- 16. List departments without employees
-- Question: How can you find all departments that currently have no employees?
SELECT department.department_name 
FROM department 
LEFT JOIN emp ON department.department_id = emp.department_id 
WHERE emp.emp_id IS NULL;

-- 17. Find the average salary by department
-- Question: How do you calculate the average salary of employees in each department?
SELECT department.department_name, AVG(emp.salary) AS average_salary
FROM department
JOIN emp ON department.department_id = emp.department_id
GROUP BY department.department_name;
