db.hostel.insertOne({
student_id:1,name:"Arjun",room_number:101,block_name:"A",bed_number:1
});

db.hostel.insertMany([
{student_id:2,name:"Ravi",room_number:102,block_name:"B"},
{student_id:3,name:"Kiran",room_number:103,block_name:"A"},
{student_id:4,name:"Manoj",room_number:104,block_name:"C"},
{student_id:5,name:"Sita",room_number:105,block_name:"A"},
{student_id:6,name:"Neha",room_number:106,block_name:"B"}
]);

db.hostel.find({block_name:"A"});

db.hostel.find({block_name:"A"},{_id:0,name:1,room_number:1,block_name:1});

db.hostel.deleteOne({student_id:2});
