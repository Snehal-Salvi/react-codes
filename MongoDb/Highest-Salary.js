// get the highest salary in MongoDB

// Using find with sort and limit

db.employees.find({}, { salary: 1 }) // Select salary only
  .sort({ salary: -1 }) // Sort in descending order
  .limit(1); // Limit to 1 document
