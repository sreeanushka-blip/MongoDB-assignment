db.riders.insertMany([
{rider_id:1,rider_name:"A",current_status:"Available",average_rating:4.8,total_deliveries:25,earnings_today:500,delivery_history:[1,2]},
{rider_id:2,rider_name:"B",current_status:"Busy",average_rating:4.2,total_deliveries:10,earnings_today:300,delivery_history:[3]},
{rider_id:3,rider_name:"C",current_status:"Available",average_rating:4.7,total_deliveries:30,earnings_today:700,delivery_history:[4,5]},
{rider_id:4,rider_name:"D",current_status:"Offline",total_deliveries:0,delivery_history:[]},
{rider_id:5,rider_name:"E",current_status:"Available",average_rating:4.9,total_deliveries:40,earnings_today:900,delivery_history:[6]}
]);

db.riders.find({current_status:"Available",average_rating:{$gt:4.5}});

db.riders.updateMany({total_deliveries:{$gt:20}},{$inc:{earnings_today:100}});

db.riders.deleteMany({current_status:"Offline",total_deliveries:0});

db.riders.createIndex({delivery_history:1});
