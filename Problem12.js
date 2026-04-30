db.attendance.insertMany([
{record_id:1,emp_name:"A",department:"IT",date:new Date(),status:"Absent"},
{record_id:2,emp_name:"B",department:"HR",status:"Present",check_in_time:"9:00"},
{record_id:3,emp_name:"C",department:"IT",status:"Absent"},
{record_id:4,emp_name:"D",department:"IT",status:"Leave"},
{record_id:5,emp_name:"E",department:"Finance",status:"Present",check_in_time:"9:30"}
]);

db.attendance.find({status:"Absent",department:"IT"});

db.attendance.updateMany({check_in_time:{$ne:null}},{$set:{status:"Present"}});

db.attendance.deleteMany({date:{$lt:new Date("2024-01-01")},status:"Leave"});

db.attendance.find({status:"Present"}).sort({date:1});
