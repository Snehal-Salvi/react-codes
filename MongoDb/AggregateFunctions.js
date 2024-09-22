// 1. $match: Filters documents to pass only those that match the specified condition.
{ $match: { status: "A" } }

// 2. $group: Groups input documents by a specified identifier and 
// applies an accumulator function (like sum, average, count) to group values.
{
    $group: {
      _id: "$category",  // Group by category
      totalSales: { $sum: "$sales" }  // Sum sales for each category
    }
  }

// 3. $sort: Sorts the documents based on one or more fields.
{ $sort: { price: -1 } }  // Sort by price in descending order

// 4. $limit: Limits the number of documents passed to the next stage.
{ $limit: 5 }  // Pass only the first 5 documents

// 5. $lookup: Performs joins with other collections.
{
    $lookup: {
      from: "orders",  // The collection to join
      localField: "_id",  // Field from the input documents
      foreignField: "customerId",  // Field from the joined collection
      as: "customerOrders"  // Name of the new field to store the result
    }
  }

  
