db.jobs.insertOne({
jobTitle:"Developer",
company:"ABC",
location:"Chennai",
salary:35000,
jobType:"Full-Time"
});

db.jobs.insertMany([
{jobTitle:"Designer",company:"XYZ",location:"Bangalore",salary:30000,jobType:"Part-Time"},
{jobTitle:"Manager",company:"DEF",location:"Chennai",salary:50000,jobType:"Full-Time"},
{jobTitle:"Tester",company:"GHI",location:"Hyderabad",salary:28000,jobType:"Contract"},
{jobTitle:"Engineer",company:"JKL",location:"Bangalore",salary:45000,jobType:"Full-Time"},
{jobTitle:"Analyst",company:"MNO",location:"Chennai",salary:42000,jobType:"Part-Time"}
]);

db.jobs.find({salary:{$gt:30000}});

db.jobs.find({location:"Chennai",salary:{$gt:40000}});

db.jobs.find({
jobType:{$ne:"Full-Time"},
location:{$in:["Chennai","Bangalore"]}
}).sort({salary:-1});
