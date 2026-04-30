db.giftcards.insertOne({
card_id:1,recipient_name:"A",amount:1000,expiry_date:new Date("2026-12-01"),is_used:false
});

db.giftcards.insertMany([
{card_id:2,recipient_name:"B",amount:500,is_used:true,expiry_date:new Date("2024-01-01")},
{card_id:3,recipient_name:"C",amount:1500,is_used:false,expiry_date:new Date("2027-01-01")},
{card_id:4,recipient_name:"D",amount:700,is_used:false,expiry_date:new Date("2026-06-01")},
{card_id:5,recipient_name:"E",amount:900,is_used:true,expiry_date:new Date("2025-05-01")},
{card_id:6,recipient_name:"F",amount:1100,is_used:false,expiry_date:new Date("2026-08-01")}
]);

db.giftcards.find({is_used:false,expiry_date:{$gt:new Date()}});

db.giftcards.find({},{_id:0,recipient_name:1,amount:1,expiry_date:1});

db.giftcards.deleteOne({card_id:2});
