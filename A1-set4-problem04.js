db.documents.insertMany([
{documentTitle:"Doc1",category:"Science",upload_date:new Date(),views:100,author:"A"},
{documentTitle:"Doc2",category:"Tech",upload_date:new Date(),views:200,author:"B"},
{documentTitle:"Doc3",category:"Science",upload_date:new Date(),views:150,author:"C"},
{documentTitle:"Doc4",category:"History",upload_date:new Date(),views:80,author:"D"},
{documentTitle:"Doc5",category:"Tech",upload_date:new Date(),views:300,author:"E"}
]);

db.documents.createIndex({documentTitle:1});

db.documents.createIndex({category:1,views:1});

db.documents.find({category:"Science"}).explain("executionStats");

// Explanation:
// Indexing improves performance by reducing full collection scans.
// Single-field index → fast search on documentTitle
// Compound index → efficient filtering + sorting on category & views
