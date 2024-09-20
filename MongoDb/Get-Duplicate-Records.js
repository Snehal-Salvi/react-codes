// Query to Get Duplicate Records in MongoDB

db.users.aggregate([
    { 
      $group: { 
        _id: "$email", // Group by the email field
        count: { $sum: 1 } // Count occurrences
      } 
    },
    { 
      $match: { count: { $gt: 1 } } // Filter for counts greater than 1 (duplicates)
    }
  ]);
  