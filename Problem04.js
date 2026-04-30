db.expenses.insertOne({
expense_id:1,category:"Food",amount:600,date:new Date(),payment_method:"UPI",note:"Lunch"
});

db.expenses.insertMany([
{expense_id:2,category:"Transport",amount:200,date:new Date(),payment_method:"Cash"},
{expense_id:3,category:"Bills",amount:1200,date:new Date(),payment_method:"UPI"},
{expense_id:4,category:"Entertainment",amount:800,date:new Date(),payment_method:"Card"},
{expense_id:5,category:"Food",amount:300,date:new Date(),payment_method:"Cash"},
{expense_id:6,category:"Transport",amount:700,date:new Date(),payment_method:"UPI"}
]);

db.expenses.find({amount:{$gt:500}});

db.expenses.find({amount:{$gt:500}},{_id:0,category:1,amount:1,date:1});

db.expenses.deleteOne({expense_id:2});
