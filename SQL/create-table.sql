CREATE TABLE emp (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,  -- Employee ID (Primary Key, auto-incremented)
    first_name VARCHAR(50) NOT NULL,        -- First Name
    last_name VARCHAR(50) NOT NULL,         -- Last Name
    job_title VARCHAR(100),                  -- Job Title
    salary DECIMAL(10, 2),                   -- Salary (up to 10 digits, 2 after the decimal)
    hire_date DATE                           -- Hire Date
);
