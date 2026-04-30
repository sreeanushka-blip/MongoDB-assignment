db.watchlist.insertOne({
movie_id:1,title:"Inception",genre:"SciFi",release_year:2010,imdb_rating:8.8,watched:false
});

db.watchlist.insertMany([
{movie_id:2,title:"Titanic",genre:"Romance",imdb_rating:7.8,watched:true},
{movie_id:3,title:"Avengers",genre:"Action",imdb_rating:8.5,watched:false},
{movie_id:4,title:"Joker",genre:"Drama",imdb_rating:8.4,watched:false},
{movie_id:5,title:"Conjuring",genre:"Horror",imdb_rating:7.5,watched:true},
{movie_id:6,title:"Interstellar",genre:"SciFi",imdb_rating:8.9,watched:false}
]);

db.watchlist.find({watched:false});

db.watchlist.find({watched:false},{_id:0,title:1,genre:1,imdb_rating:1});

db.watchlist.deleteOne({movie_id:3});
