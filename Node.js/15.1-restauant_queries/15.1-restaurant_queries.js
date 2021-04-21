/*
*1.1- Write a MongoDb query to display all the documents in the restaurant collection
db.restaurants.find().pretty()

*1.2- Write a MongoDb query to display all restaurants the have a specific cuisine
db.restaurants.find({cuisine:"asian"}).pretty()

*1.3- Write a MongoDb query that displays only kosher restaurants
db.restaurants.find({kosher:true}).pretty()

* 1.4- Write a MongoDb query that displays a specific cities restaurants
db.restaurants.find({"address.city":"Holon"}).pretty()

* 1.5- Write a MongoDb query to display a specific restaurants address
db.restaurants.findOne({_id: ObjectId("5ff83e6153fc2f52a5dd5f66")}).address


*1.6- Write a MongoDb query to display a specific restaurants geoLocation
db.restaurants.findOne({_id: ObjectId("5ff83e6153fc2f52a5dd5f66")}).address.coordinates

*1.7- Write a MongoDb query that should be displayed by restaurant name in ascending order
db.restaurants.find().sort({name:1})

*1.8- Write a MongoDb query that should display the restaurants by ascending city names
db.restaurants.find().sort({"address.city":1})

*1.9- Update a specific restaurant's name
db.restaurants.updateOne({_id:ObjectId("5ffac9f580703d37b8cb768b")},{name:"falafel 10 shekels"})

*1.10- Update a specific restaurant by adding a new review.
db.restaurants.updateOne({_id:ObjectId("5ffacc66167defa843aace63")},{$push:{reviews:{date: new Date(),score:10}}})

*1.11- Update all restaurants to be kosher
db.restaurants.updateMany({kosher:false},{$set:{kosher:true}})

*1.12- Delete a specific restaurant
db.restaurants.deleteOne({_id:ObjectId("5ffacc66167defa843aace63")})

* 1.13- Delete all restaurants
db.restaurants.deleteMany({})

*2.1- Write a MongoDb query to display all restaurants names
db.restaurants.find().forEach(function(el) {print(el.name)})

*2.2- Write a MongoDb query to print all restaurant cities
db.restaurants.find().forEach(function(el) {print(el.address.city)})

*2.3- Write a MongoDb query to print all restaurants geoLocation
db.restaurants.find().forEach(function(el) {print(el.address.coordinates)})

if I wanted just for fun to print geolocation separately i would do this:

db.restaurants.find().forEach(function(el) {el.address.coordinates.forEach(function(i){print(i)})})


* 3.1- Query for restaurant names that start with a specific alphabet
db.restaurants.find({name:{$regex:/^b/}})

* 3.2- Query how many documents you have from a specific collection
db.restaurants.count()


* 3.3- Write a MongoDb query to get restaurants that include reviews from a specific date
 db.restaurants.find({reviews:{$elemMatch:{date:{$gte:new Date("2020-01-01")}}}}).pretty()


*4.1- Write a mongoDb query to all restaurants average score
db.restaurants.aggregate([
    {$unwind:"$reviews"},
    {$group: {_id:"$name",avg:{$avg:"$reviews.score"}}}
])

* 4.2- Write a mongoDb query to display a specific restaurants average score
db.restaurants.aggregate([
    {$match:{_id:ObjectId("5ffab76433ab673d82bbb2cc")}},
    {$unwind:"$reviews"},
    {$group: {_id:"$name",avg:{$avg:"$reviews.score"}}}
])

*/
