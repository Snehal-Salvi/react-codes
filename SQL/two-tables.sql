-- Create a department table
CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,  -- Primary Key
    department_name VARCHAR(100) NOT NULL UNIQUE    -- Unique department name, cannot be null
);

-- Create an emp table
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
