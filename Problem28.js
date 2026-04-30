db.bookings.insertMany([
{booking_id:1,event_name:"Concert",event_date:new Date("2026-11-01"),ticket_type:"VIP",number_of_tickets:2,total_price:5000,payment_status:"Paid"},
{booking_id:2,event_name:"Fest",event_date:new Date("2026-09-01"),ticket_type:"General",payment_status:"Pending"},
{booking_id:3,event_name:"Concert",event_date:new Date("2026-12-01"),ticket_type:"Student",payment_status:"Paid"},
{booking_id:4,event_name:"Expo",event_date:new Date("2023-01-01"),payment_status:"Paid"},
{booking_id:5,event_name:"Concert",event_date:new Date("2026-11-15"),payment_status:"Paid"}
]);

db.bookings.find({event_date:{$gt:new Date("2026-10-01")},payment_status:"Paid"});

db.bookings.updateMany({event_date:{$lt:new Date()},payment_status:"Paid"},{$set:{payment_status:"Refunded"}});

db.bookings.deleteMany({payment_status:"Pending",booking_date:{$lt:new Date("2024-01-01")}});

db.bookings.aggregate([
{$group:{_id:"$event_name",total_tickets:{$sum:"$number_of_tickets"}}}
]);
