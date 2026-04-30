db.menu.insertOne({item_id:1,name:"Cappuccino",category:"Coffee",price:150,availability:true});

db.menu.insertMany([
{item_id:2,name:"Espresso",category:"Coffee",price:120,availability:true},
{item_id:3,name:"Green Tea",category:"Tea",price:100,availability:true},
{item_id:4,name:"Masala Chai",category:"Tea",price:80,availability:false},
{item_id:5,name:"Sandwich",category:"Snack",price:130,availability:true},
{item_id:6,name:"Brownie",category:"Snack",price:90,availability:true}
]);

db.menu.find({availability:true});

db.menu.find({availability:true},{_id:0,name:1,price:1});

db.menu.deleteOne({item_id:3});
