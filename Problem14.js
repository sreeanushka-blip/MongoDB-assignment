db.service.insertMany([
{service_id:1,customer_name:"A",service_type:"Repair",service_date:new Date("2026-07-01"),cost:200,status:"InProgress"},
{service_id:2,customer_name:"B",service_type:"Oil Change",service_date:new Date("2024-01-01"),cost:1000,status:"Completed"},
{service_id:3,customer_name:"C",service_type:"Inspection",service_date:new Date("2026-06-01"),cost:300,status:"InProgress"},
{service_id:4,customer_name:"D",service_type:"Repair",cost:700,status:"Scheduled"},
{service_id:5,customer_name:"E",service_type:"Oil Change",cost:400,status:"Completed"}
]);

db.service.find({status:"InProgress",service_date:{$lt:new Date("2026-08-01")}});

db.service.updateMany({service_date:{$lt:new Date("2025-01-01")}},{$set:{status:"Completed"}});

db.service.deleteMany({status:"Completed",cost:{$lt:500}});

db.service.find({},{_id:0,customer_name:1,service_type:1,cost:1}).sort({cost:-1});
