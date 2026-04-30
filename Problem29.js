db.followers.insertMany([
{follower_id:1,follower_name:"A",engagement_score:90,is_active:true,interests:["Tech","AI"]},
{follower_id:2,follower_name:"B",engagement_score:60,is_active:true,interests:["Travel"]},
{follower_id:3,follower_name:"C",engagement_score:85,is_active:true,interests:["Tech","Gaming"]},
{follower_id:4,follower_name:"D",engagement_score:10,is_active:false,interests:["Food"]},
{follower_id:5,follower_name:"E",engagement_score:95,is_active:true,interests:["AI","Tech"]}
]);

db.followers.find({engagement_score:{$gt:80},is_active:true});

db.followers.updateMany({last_interaction_date:{$lt:new Date("2025-01-01")}},{$set:{is_active:false}});

db.followers.deleteMany({followed_since:{$lt:new Date("2022-01-01")},engagement_score:{$lt:20}});

db.followers.aggregate([
{$unwind:"$interests"},
{$group:{_id:"$interests",count:{$sum:1}}},
{$sort:{count:-1}}
]);
