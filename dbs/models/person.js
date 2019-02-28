const mongoose = require('mongoose')
//import mongoose from 'mongoose'

let personSchema = mongoose.Schema({
  'name':String,
  'age':Number
})

module.exports = new mongoose.models('Person',personScharm)