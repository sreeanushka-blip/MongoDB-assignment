db.rides.insertMany([
{ride_id:1,rider_name:"A",ride_status:"Requested",ride_date:new Date()},
{ride_id:2,rider_name:"B",ride_status:"Completed",distance_km:15,fare:400},
{ride_id:3,rider_name:"C",ride_status:"Requested",ride_date:new Date()},
{ride_id:4,rider_name:"D",ride_status:"Cancelled",ride_date:new Date("2023-01-01")},
{ride_id:5,rider_name:"E",ride_status:"Accepted"}
]);

db.rides.find({ride_status:"Requested",ride_date:new Date()});

db.rides.updateMany({drop_location:{$ne:null}},{$set:{ride_status:"Completed"}});

db.rides.deleteMany({ride_status:"Cancelled",ride_date:{$lt:new Date("2024-06-01")}});

db.rides.find({distance_km:{$gt:10},fare:{$gt:300}});
