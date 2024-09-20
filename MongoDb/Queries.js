// 1. Find All Documents in a Collection
db.collection.find({});

// 2. Count the Number of Documents in a Collection
db.collection.countDocuments({});

// 3. Find Documents with a Specific Field Value
db.collection.find({ fieldName: value });

// 4. Sort Documents in Ascending or Descending Order
// Ascending Order
db.collection.find({}).sort({ fieldName: 1 });

// Descending Order
db.collection.find({}).sort({ fieldName: -1 });

// 5. Update a Specific Document
db.collection.updateOne(
  { _id: documentId },
  { $set: { fieldName: newValue } }
);

// 6. Delete a Specific Document
db.collection.deleteOne({ _id: documentId });

// 7. Retrieve Only Specific Fields from Documents
db.collection.find({}, { fieldName1: 1, fieldName2: 1 });

// 8. Find Documents Where a Field Exists
db.collection.find({ fieldName: { $exists: true } });

// 9. Find Documents with a Field Value Greater Than a Certain Amount
db.collection.find({ fieldName: { $gt: value } });

// 10. Find Distinct Values in a Field
db.collection.distinct("fieldName");
