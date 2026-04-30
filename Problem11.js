db.subscriptions.insertMany([
{sub_id:1,user_name:"A",plan_type:"Basic",monthly_fee:200,start_date:new Date(),renewal_date:new Date("2026-06-01"),is_active:true},
{sub_id:2,user_name:"B",plan_type:"Premium",monthly_fee:500,start_date:new Date(),renewal_date:new Date("2026-07-01"),is_active:true},
{sub_id:3,user_name:"C",plan_type:"Standard",monthly_fee:300,is_active:false,renewal_date:new Date("2024-01-01")},
{sub_id:4,user_name:"D",plan_type:"Premium",monthly_fee:600,is_active:true},
{sub_id:5,user_name:"E",plan_type:"Basic",monthly_fee:200,is_active:false,renewal_date:new Date("2023-01-01")}
]);

db.subscriptions.find({is_active:true,plan_type:"Premium"});

db.subscriptions.updateMany({plan_type:"Basic"},{$inc:{monthly_fee:100}});

db.subscriptions.deleteMany({is_active:false,renewal_date:{$lt:new Date("2025-01-01")}});

db.subscriptions.find({},{_id:0,user_name:1,plan_type:1,monthly_fee:1}).sort({monthly_fee:-1});
