db.parking.insertOne({
slot_id:1,floor:1,vehicle_type:"Car",is_occupied:false
});

db.parking.insertMany([
{slot_id:2,floor:1,vehicle_type:"Bike",is_occupied:true},
{slot_id:3,floor:2,vehicle_type:"Car",is_occupied:false},
{slot_id:4,floor:2,vehicle_type:"Bike",is_occupied:true},
{slot_id:5,floor:3,vehicle_type:"Car",is_occupied:false},
{slot_id:6,floor:3,vehicle_type:"Bike",is_occupied:false}
]);

db.parking.find({is_occupied:false});

db.parking.find({},{_id:0,slot_id:1,floor:1,vehicle_type:1});

db.parking.deleteOne({slot_id:2});
