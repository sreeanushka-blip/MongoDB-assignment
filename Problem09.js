db.parcels.insertOne({
parcel_id:1,sender_name:"A",receiver_name:"B",shipping_cost:200,delivery_status:"Pending"
});

db.parcels.insertMany([
{parcel_id:2,delivery_status:"Shipped"},
{parcel_id:3,delivery_status:"Pending"},
{parcel_id:4,delivery_status:"Delivered"},
{parcel_id:5,delivery_status:"Pending"},
{parcel_id:6,delivery_status:"Shipped"}
]);

db.parcels.find({delivery_status:"Pending"});

db.parcels.find({},{_id:0,sender_name:1,receiver_name:1,shipping_cost:1});

db.parcels.deleteOne({parcel_id:2});
