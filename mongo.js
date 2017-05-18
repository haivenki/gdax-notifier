var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/myDb');

//make model
var myModel = mongoose.model("mycollections", {price:Number, email:Array, sent: Boolean})

//create and save data
myModel({price: 99, sent:false}).save()


//find
myModel.find({$and: [{ price: { $gte: 21 }}, {sent:false}]}, function (err, data) {
    console.log(data)
})

// //update sent to true
myModel.update({$and: [{ price: { $gte: 21 }}, {sent:false}]}, {$set:{sent:true}}, {multi: true}, function(err, data){
	console.log(data)
})

// //add email to array
myModel.update({ price: 22 }, {$push: {email: "email11@gmail.com"}}, function(err, data){
	console.log(data)
})