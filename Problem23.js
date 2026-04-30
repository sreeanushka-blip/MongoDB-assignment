db.inventory.insertMany([
{product_id:1,product_name:"Item1",category:"A",quantity_in_stock:10,reorder_level:20,supplier_name:"ABC Corp",last_restock_date:new Date()},
{product_id:2,product_name:"Item2",category:"B",quantity_in_stock:50,reorder_level:20,supplier_name:"XYZ",last_restock_date:new Date()},
{product_id:3,product_name:"Item3",category:"A",quantity_in_stock:5,reorder_level:10,supplier_name:"ABC Corp",last_restock_date:new Date()},
{product_id:4,product_name:"Item4",category:"C",quantity_in_stock:0,reorder_level:5,supplier_name:"ABC Corp",last_restock_date:new Date()},
{product_id:5,product_name:"Item5",category:"B",quantity_in_stock:30,reorder_level:40,supplier_name:"XYZ",last_restock_date:new Date()}
]);

db.inventory.find({$expr:{$lt:["$quantity_in_stock","$reorder_level"]}});

db.inventory.updateMany({supplier_name:"ABC Corp"},{$inc:{quantity_in_stock:100}});

db.inventory.deleteMany({last_restock_date:{$lt:new Date("2022-01-01")},quantity_in_stock:0});

db.inventory.createIndex({category:1,quantity_in_stock:1});
