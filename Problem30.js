db.defects.insertMany([
{defect_id:1,product_name:"P1",defect_type:"Cosmetic",severity:"High",quantity_affected:10,status:"Open"},
{defect_id:2,product_name:"P2",defect_type:"Functional",severity:"Medium",quantity_affected:5,status:"Resolved"},
{defect_id:3,product_name:"P3",defect_type:"Safety",severity:"High",quantity_affected:20,status:"Open"},
{defect_id:4,product_name:"P4",defect_type:"Cosmetic",severity:"Low",quantity_affected:3,status:"Resolved"},
{defect_id:5,product_name:"P5",defect_type:"Functional",severity:"High",quantity_affected:15,status:"Open"}
]);

db.defects.find({severity:"High",status:"Open"});

db.defects.updateMany({root_cause:{$ne:null}},{$set:{status:"Resolved",resolution_date:new Date()}});

db.defects.deleteMany({detection_date:{$lt:new Date("2022-01-01")},status:"Resolved"});

db.defects.aggregate([
{$group:{_id:"$defect_type",total_quantity:{$sum:"$quantity_affected"}}},
{$sort:{total_quantity:-1}}
]);
