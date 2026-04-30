db.equipment.insertMany([
{equip_id:1,equip_name:"Treadmill",condition:"NeedsService"},
{equip_id:2,equip_name:"Bench",condition:"Good"},
{equip_id:3,equip_name:"Cycle",condition:"OutOfOrder"},
{equip_id:4,equip_name:"Weights",condition:"Good"},
{equip_id:5,equip_name:"Rowing",condition:"NeedsService"}
]);

db.equipment.find({condition:{$in:["NeedsService","OutOfOrder"]}});

db.equipment.updateMany({last_maintenance_date:{$gt:new Date("2025-01-01")}},{$set:{condition:"Good"}});

db.equipment.deleteMany({purchase_date:{$lt:new Date("2015-01-01")},condition:"OutOfOrder"});

db.equipment.find().sort({next_maintenance_date:1});
