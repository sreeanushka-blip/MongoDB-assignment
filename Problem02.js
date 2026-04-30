db.contacts.insertOne({
contact_id:1,first_name:"Rahul",last_name:"Sharma",phone:"9876543210",email:"rahul@gmail.com",city:"Mumbai"
});

db.contacts.insertMany([
{contact_id:2,first_name:"Anjali",last_name:"Mehta",phone:"9123456780",email:"anjali@gmail.com",city:"Delhi"},
{contact_id:3,first_name:"Amit",last_name:"Patel",phone:"9988776655",email:"amit@gmail.com",city:"Mumbai"},
{contact_id:4,first_name:"Priya",last_name:"Nair",phone:"9090909090",email:"priya@gmail.com",city:"Bangalore"},
{contact_id:5,first_name:"Karan",last_name:"Singh",phone:"9871234560",email:"karan@gmail.com",city:"Mumbai"},
{contact_id:6,first_name:"Neha",last_name:"Gupta",phone:"9012345678",email:"neha@gmail.com",city:"Chennai"}
]);

db.contacts.find({city:"Mumbai"});

db.contacts.find({city:"Mumbai"},{_id:0,first_name:1,last_name:1,phone:1});

db.contacts.deleteOne({contact_id:3});
