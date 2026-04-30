db.workouts.insertOne({
workout_id:1,exercise_name:"Running",duration_minutes:30,calories_burned:200,intensity:"High"
});

db.workouts.insertMany([
{workout_id:2,intensity:"Low"},
{workout_id:3,intensity:"High"},
{workout_id:4,intensity:"Medium"},
{workout_id:5,intensity:"High"},
{workout_id:6,intensity:"Low"}
]);

db.workouts.find({intensity:"High"});

db.workouts.find({},{_id:0,exercise_name:1,duration_minutes:1,calories_burned:1});

db.workouts.deleteOne({workout_id:2});
