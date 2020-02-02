const express = require('express');
const mongoose = require('mongoose');

var app = express();

app.get('/', (req, res) => {
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/myAppDb')
    var MyModel = mongoose.model('Test', new Schema({ email: String, password: String },{collection:'users'}));
    MyModel.findOne(function (error, result) { 
        if(error){
            console.log(error)
        }
        res.send(result) });
})

app.listen(5000, () => {
    console.log('Server started on post 5000')
})