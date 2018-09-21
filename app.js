//starting packages
const express = require ('express');
const app = express();
const index = require('./views/index')
const {db} = require('./models') //Why using destructuring here
// console.log('overhere', db)


// middleware
const morgan = require('morgan');
const bodyParser = require("body-parser");
const htmlTempTag = require('html-template-tag');
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')
app.use('/wiki', wikiRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + "./staticFiles/stylesheets"));
app.use(bodyParser.urlencoded({extended: false}))


//server
app.get('/', (req, res)=>
    res.send('hello world!'));
app.get('/kittens', (req,res)=>{
    res.send(index.layout(""));
})


db.authenticate().
then(() => {
  console.log('connected to the database');
})

const init = async () => {
    await db.sync()
    const Port = 3000;
    app.listen(Port, () => {
    console.log('listening at Port 3000');
})
}

init()

