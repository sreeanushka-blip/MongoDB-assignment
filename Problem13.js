db.polls.insertMany([
{poll_id:1,options:["A","B"],created_date:new Date(),end_date:new Date("2026-12-01"),is_active:true},
{poll_id:2,options:["A","B","C","D"],end_date:new Date("2023-01-01"),is_active:false},
{poll_id:3,options:["A","B","C"],end_date:new Date("2027-01-01"),is_active:true},
{poll_id:4,options:["A","B","C","D","E"],is_active:true},
{poll_id:5,options:["A"],is_active:false}
]);

db.polls.find({is_active:true,end_date:{$gt:new Date()}});

db.polls.updateMany({end_date:{$lt:new Date()}},{$set:{is_active:false}});

db.polls.deleteMany({created_date:{$lt:new Date("2023-01-01")},is_active:false});

db.polls.find({options:{$size:4}});
