const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/myAppDb')
    var MyModel = mongoose.model('Test', new Schema({ email: String, password: String },{collection:'users'}));
    MyModel.findOne(function (error, result) { 
        if(error){
            console.log(error)
            res.send({
                status: 404,
                data: []
            })
        }
        res.send({
            status: 200,
            data: result
        }) });
});

app.post('/authenticateUser', (req, res) => {
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/myAppDb')
    var MyModel = mongoose.model('Test', new Schema({ email: String, password: String },{collection:'users'}));
    MyModel.find(req.body,function (error, result) { 
        if(error){
            console.log(error)
            res.send({
                status: 404,
                data: []
            })
        }
        res.send({
            status: 200,
            data: result
        }) });
});

app.listen(5000, () => {
    console.log('Server started on post 5000')
})