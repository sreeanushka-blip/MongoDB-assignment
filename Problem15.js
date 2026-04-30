db.reading.insertMany([
{record_id:1,member_name:"A",genre:"Fiction",pages_read:150,is_completed:true},
{record_id:2,member_name:"B",genre:"NonFiction",pages_read:200,is_completed:false},
{record_id:3,member_name:"C",genre:"Fiction",pages_read:120,is_completed:false},
{record_id:4,member_name:"D",genre:"SciFi",pages_read:300,is_completed:true},
{record_id:5,member_name:"E",genre:"Fiction",pages_read:250,is_completed:true}
]);

db.reading.find({is_completed:false,pages_read:{$gt:100}});

db.reading.updateMany({completion_date:{$ne:null}},{$set:{is_completed:true}});

db.reading.deleteMany({start_date:{$lt:new Date("2023-01-01")},is_completed:false});

db.reading.find({genre:"Fiction",is_completed:true});
