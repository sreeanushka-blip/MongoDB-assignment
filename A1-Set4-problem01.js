db.teachers.insertOne({
teacherName:"Anita",
subject:"Maths",
experience:10,
salary:50000,
status:"Active"
});

db.teachers.insertMany([
{teacherName:"Ravi",subject:"Science",experience:8,salary:45000,status:"Active"},
{teacherName:"Meena",subject:"Maths",experience:12,salary:55000,status:"Active"},
{teacherName:"Kiran",subject:"English",experience:5,salary:35000,status:"Inactive"},
{teacherName:"Sita",subject:"Maths",experience:15,salary:60000,status:"Active"},
{teacherName:"Arjun",subject:"Physics",experience:7,salary:40000,status:"Active"}
]);

db.teachers.find();

db.teachers.find({}, {_id:0, teacherName:1, subject:1});

db.teachers.find({subject:"Maths"})
.sort({experience:-1})
.limit(5);
