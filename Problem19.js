db.reviews.insertMany([
{review_id:1,course_name:"MongoDB",rating:5,likes_count:20,is_verified_purchase:false},
{review_id:2,course_name:"Python",rating:3,likes_count:5},
{review_id:3,course_name:"MongoDB Basics",rating:4,likes_count:15},
{review_id:4,course_name:"Java",rating:2,likes_count:1},
{review_id:5,course_name:"MongoDB Advanced",rating:5,likes_count:25}
]);

db.reviews.find({rating:{$gt:4},likes_count:{$gt:10}});

db.reviews.updateMany({course_name:/MongoDB/},{$set:{is_verified_purchase:true}});

db.reviews.deleteMany({review_date:{$lt:new Date("2024-01-01")},rating:1});

db.reviews.find({},{_id:0,course_name:1,student_name:1,rating:1}).sort({rating:-1});
