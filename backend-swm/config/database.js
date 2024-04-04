let server = require('./server');
const path = require('path')
const mongoose = require('mongoose')
const express = require('express');


mongoose.connect('mongodb://localhost:27017/swm')
    .then(() => {
        console.log('MongoDB Connected Succesfully')
    })
    .catch (err => {
        console.log('MongoDB Connection Failed')
        console.log(err);
    })

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.urlencoded({extended: true}))


module.exports = server;
