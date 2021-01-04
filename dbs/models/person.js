const mongoose = require('mongoose')

let personSchema = mongoose.Schema({
  'name':String,
  'age':Number
})

module.exports = new mongoose.model('Person',personSchema)