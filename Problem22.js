db.itinerary.insertMany([
{itinerary_id:1,customer_name:"A",destination:"Manali",budget:60000,booking_status:"Confirmed",activities:["Trekking","Sightseeing"]},
{itinerary_id:2,customer_name:"B",destination:"Goa",budget:40000,booking_status:"Pending",activities:["Beach"]},
{itinerary_id:3,customer_name:"C",destination:"Kashmir",budget:80000,booking_status:"Confirmed",activities:["Trekking","Safari"]},
{itinerary_id:4,customer_name:"D",destination:"Ooty",budget:30000,booking_status:"Cancelled",activities:["Nature"]},
{itinerary_id:5,customer_name:"E",destination:"Ladakh",budget:70000,booking_status:"Confirmed",activities:["Trekking"]}
]);

db.itinerary.find({booking_status:"Confirmed",budget:{$gt:50000}});

db.itinerary.updateMany({trip_start_date:{$lt:new Date()}},{$set:{booking_status:"Cancelled"}});

db.itinerary.deleteMany({booking_status:"Cancelled",trip_end_date:{$lt:new Date("2024-01-01")}});

db.itinerary.find({activities:"Trekking"});
