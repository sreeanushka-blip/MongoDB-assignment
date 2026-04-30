db.flights.insertOne({
flight_no:"AI101",
airline:"Air India",
departure:"Delhi",
arrival:"Mumbai",
price:5000
});

db.flights.insertMany([
{flight_no:"AI102",airline:"Air India",departure:"Delhi",arrival:"Chennai",price:4500},
{flight_no:"IN201",airline:"Indigo",departure:"Bangalore",arrival:"Delhi",price:3000},
{flight_no:"IN202",airline:"Indigo",departure:"Mumbai",arrival:"Hyderabad",price:2500},
{flight_no:"SP301",airline:"SpiceJet",departure:"Chennai",arrival:"Delhi",price:6000},
{flight_no:"IN203",airline:"Indigo",departure:"Kolkata",arrival:"Mumbai",price:1800}
]);

db.flights.updateOne({flight_no:"AI101"}, {$set:{price:5500}});

db.flights.updateMany({airline:"Indigo"}, {$inc:{price:500}});

db.flights.deleteMany({price:{$lt:2000}});

db.flights.find({price:{$gt:5000}});
