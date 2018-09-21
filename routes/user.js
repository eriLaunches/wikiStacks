const express = require('express')
const router = express.Router()
const {db} = require('../models')

router.use(function(req,res,next) {
  console.log('hi')
})

module.exports = router
