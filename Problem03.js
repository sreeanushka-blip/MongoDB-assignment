db.tasks.insertOne({
task_id:1,title:"Assignment",description:"MongoDB",due_date:new Date("2026-05-01"),priority:"High",is_completed:false
});

db.tasks.insertMany([
{task_id:2,title:"Workout",due_date:new Date(),priority:"Medium",is_completed:false},
{task_id:3,title:"Shopping",due_date:new Date(),priority:"Low",is_completed:true},
{task_id:4,title:"Project",due_date:new Date(),priority:"High",is_completed:false},
{task_id:5,title:"Call",due_date:new Date(),priority:"Medium",is_completed:true},
{task_id:6,title:"Study",due_date:new Date(),priority:"High",is_completed:false}
]);

db.tasks.find({is_completed:false});

db.tasks.find({is_completed:false},{_id:0,title:1,due_date:1});

db.tasks.deleteOne({task_id:3});
