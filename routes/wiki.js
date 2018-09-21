const html = require('../views/index')
console.log(html)

const express = require('express')
const router = express.Router()
const {db} = require('../models')

router.get ('/', (req,res,next) => {
  res.redirect('/wiki')
});

router.post('/',(req,res,next)=> {
  res.send('got to POST /wiki/')
});

router.get ('/add', (req,res,next) => {
  res.send(html.addPage())
});


module.exports = router
