// Query to Get Nth Highest Salary in MongoDB

db.employees.aggregate([
    {
      $group: {
        _id: null, // We're not grouping by any specific field
        uniqueSalaries: { $addToSet: "$salary" } // Collect unique salaries
      }
    },
    {
      $unwind: "$uniqueSalaries" // Flatten the array of unique salaries
    },
    {
      $sort: { uniqueSalaries: -1 } // Sort salaries in descending order
    },
    {
      $group: {
        _id: null,
        nthHighestSalary: { $first: "$uniqueSalaries" } // Get the first salary in sorted order
      }
    },
    {
      $skip: n - 1, // Skip the first n-1 records to get the nth record
    },
    {
      $limit: 1 // Limit to 1 result
    }
  ]);
  