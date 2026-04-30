db.playlist.insertMany([
{playlist_id:1,user_name:"A",playlist_name:"Hits",songs:[{title:"Song1",artist:"X"}],created_date:new Date(),total_duration_minutes:60,is_public:true,play_count:200},
{playlist_id:2,user_name:"B",playlist_name:"Chill",songs:[{title:"Song2",artist:"Y"}],created_date:new Date(),total_duration_minutes:30,is_public:false,play_count:50},
{playlist_id:3,user_name:"A",playlist_name:"Workout",songs:[{title:"Song3",artist:"Z"}],created_date:new Date(),total_duration_minutes:45,is_public:true,play_count:150},
{playlist_id:4,user_name:"C",playlist_name:"Party",songs:[{title:"Song4",artist:"W"}],created_date:new Date(),total_duration_minutes:90,is_public:true,play_count:300},
{playlist_id:5,user_name:"B",playlist_name:"Focus",songs:[{title:"Song5",artist:"V"}],created_date:new Date(),total_duration_minutes:40,is_public:true,play_count:120}
]);

db.playlist.find({is_public:true,play_count:{$gt:100}});

db.playlist.updateOne({playlist_id:1},{$inc:{play_count:1}});

db.playlist.deleteMany({created_date:{$lt:new Date("2023-01-01")},is_public:false});

db.playlist.aggregate([
{$group:{_id:"$user_name",avg_duration:{$avg:"$total_duration_minutes"}}}
]);
