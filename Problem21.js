db.wishlist.insertMany([
{wishlist_id:1,customer_name:"A",product_name:"Phone",product_category:"Electronics",price:1500,added_date:new Date(),notify_when_available:true},
{wishlist_id:2,customer_name:"B",product_name:"Shirt",product_category:"Clothing",price:2500,added_date:new Date(),notify_when_available:false},
{wishlist_id:3,customer_name:"A",product_name:"Laptop",product_category:"Electronics",price:1000,added_date:new Date(),notify_when_available:true},
{wishlist_id:4,customer_name:"C",product_name:"Book",product_category:"Books",price:500,added_date:new Date(),notify_when_available:true},
{wishlist_id:5,customer_name:"B",product_name:"Headphones",product_category:"Electronics",price:1800,added_date:new Date(),notify_when_available:true}
]);

db.wishlist.find({price:{$lt:2000},notify_when_available:true});

db.wishlist.updateMany({product_category:"Electronics"},{$mul:{price:0.8}});

db.wishlist.deleteMany({added_date:{$lt:new Date("2024-01-01")}});

db.wishlist.aggregate([
{$group:{_id:"$customer_name",count:{$sum:1}}}
]);
