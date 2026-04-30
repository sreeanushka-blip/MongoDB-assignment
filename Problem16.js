db.prescriptions.insertMany([
{prescription_id:1,patient_name:"A",medicine_name:"Med1",issue_date:new Date(),expiry_date:new Date("2026-12-01"),status:"Active"},
{prescription_id:2,patient_name:"B",medicine_name:"Med2",expiry_date:new Date("2023-01-01"),status:"Expired"},
{prescription_id:3,patient_name:"C",medicine_name:"Med3",expiry_date:new Date("2027-01-01"),status:"Active"},
{prescription_id:4,patient_name:"D",medicine_name:"Med4",status:"Fulfilled"},
{prescription_id:5,patient_name:"E",medicine_name:"Med5",status:"Active"}
]);

db.prescriptions.find({status:"Active",expiry_date:{$gt:new Date()}});

db.prescriptions.updateMany({expiry_date:{$lt:new Date()}},{$set:{status:"Expired"}});

db.prescriptions.deleteMany({status:"Fulfilled",issue_date:{$lt:new Date("2024-01-01")}});

db.prescriptions.find({},{_id:0,patient_name:1,medicine_name:1,status:1}).sort({issue_date:-1});
