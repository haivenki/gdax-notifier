var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/myDb');

//make model
var myModel = mongoose.model("mycollections", {price:Number})

//create and save data
myModel({price: 22}).save()


// query
myModel.find({}, function (err, data) {
        console.log(data)
})
