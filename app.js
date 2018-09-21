const express = require ('express');
const app = express();
const index = require('./views/index')

// middleware
const morgan = require('morgan');
const bodyParser = require("body-parser");
const htmlTempTag = require('html-template-tag');

app.use(morgan('dev'));
app.use(express.static(__dirname + "./staticFiles/stylesheets"));
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=>
    res.send('hello world!'));
app.get('/kittens', (req,res)=>{
    res.send(index.layout(""));
})
const Port = 3000;
app.listen(Port, ()=>{
    console.log('listening at Port 3000');
})