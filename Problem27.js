db.feedback.insertMany([
{feedback_id:1,guest_name:"A",hotel_name:"Hotel1",overall_rating:2,would_recommend:false},
{feedback_id:2,guest_name:"B",hotel_name:"Hotel1",overall_rating:5,would_recommend:true},
{feedback_id:3,guest_name:"C",hotel_name:"Hotel2",overall_rating:4,would_recommend:true},
{feedback_id:4,guest_name:"D",hotel_name:"Hotel2",overall_rating:1,would_recommend:false},
{feedback_id:5,guest_name:"E",hotel_name:"Hotel3",overall_rating:5,would_recommend:true}
]);

db.feedback.find({overall_rating:{$lt:3},would_recommend:false});

db.feedback.updateMany({overall_rating:{$gt:4}},{$set:{would_recommend:true}});

db.feedback.deleteMany({feedback_date:{$lt:new Date("2023-01-01")},overall_rating:1});

db.feedback.aggregate([
{$group:{_id:"$hotel_name",avg_cleanliness:{$avg:"$cleanliness_rating"},avg_service:{$avg:"$service_rating"}}}
]);
