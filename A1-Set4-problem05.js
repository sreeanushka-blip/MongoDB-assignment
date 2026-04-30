db.restaurants.insertMany([
{name:"R1",city:"Delhi",orders:100,revenue:30000},
{name:"R2",city:"Mumbai",orders:150,revenue:50000},
{name:"R3",city:"Delhi",orders:80,revenue:20000},
{name:"R4",city:"Bangalore",orders:120,revenue:40000},
{name:"R5",city:"Mumbai",orders:200,revenue:70000}
]);

db.restaurants.aggregate([
{$group:{_id:null,totalRevenue:{$sum:"$revenue"}}}
]);

db.restaurants.aggregate([
{$group:{_id:"$city",avgOrders:{$avg:"$orders"}}}
]);

db.restaurants.aggregate([
{$group:{_id:"$city",totalOrders:{$sum:"$orders"}}}
]);

db.restaurants.aggregate([
{$match:{revenue:{$gt:20000}}},
{$group:{_id:"$city",totalRevenue:{$sum:"$revenue"}}},
{$sort:{totalRevenue:-1}},
{$limit:3}
]);
