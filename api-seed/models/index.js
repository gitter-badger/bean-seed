'use strict';
var fs = require('fs'),
    path = require('path'),
    mongoose = require('mongoose'),
    db = {},
    config = require('config');

mongoose.connect('mongodb://localhost:27017/test');

// import all file in this dir, except index.js
fs.readdirSync(__dirname)
.filter(function(file){
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
})
.forEach(function(file){
    var model = require(path.join(__dirname, file));
    db[model.name] = model;
});

db.mongoose = mongoose;
module.exports = db;
