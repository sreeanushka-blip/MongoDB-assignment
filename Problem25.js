db.loans.insertMany([
{loan_id:1,applicant_name:"A",loan_type:"Home",loan_amount:500000,approval_status:"Pending",credit_score:750},
{loan_id:2,applicant_name:"B",loan_type:"Car",loan_amount:200000,approval_status:"Approved",credit_score:800},
{loan_id:3,applicant_name:"C",loan_type:"Personal",loan_amount:100000,approval_status:"Pending",credit_score:720},
{loan_id:4,applicant_name:"D",loan_type:"Home",loan_amount:600000,approval_status:"Rejected",credit_score:650},
{loan_id:5,applicant_name:"E",loan_type:"Car",loan_amount:300000,approval_status:"Approved",credit_score:780}
]);

db.loans.find({approval_status:"Pending",credit_score:{$gt:700}});

db.loans.updateMany({credit_score:{$gt:750}},{$set:{approval_status:"Approved"}});

db.loans.deleteMany({application_date:{$lt:new Date("2023-01-01")},approval_status:"Rejected"});

db.loans.aggregate([
{$match:{approval_status:"Approved"}},
{$group:{_id:"$loan_type",avg_amount:{$avg:"$loan_amount"}}}
]);
