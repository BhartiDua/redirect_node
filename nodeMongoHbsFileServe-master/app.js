const mongoose = require('mongoose');
const smp = require('./model/sample') ; 
const http = require('http');
const Handlebars = require('handlebars')
const fs = require('fs');
const path = require('path')

mongoose.connect('mongodb://localhost/123',{useNewUrlParser:true,useUnifiedTopology: true})

http.createServer(async function (req, res) {
    if(req.url==='/create'){
        let temp = new smp ({
            _id: new mongoose.Types.ObjectId(),
            firstName: 'Bharti',
            lastName: 'Dua'
        });
        temp.save(function(err) {
            if (err) throw err;
            console.log('Data successfully saved.');
        });
        res.redirect('./html/helloUser.html');
    }
      
}).listen(3000, function(){
    console.log("server start at port 3000"); //the server object listens on port 3000
});