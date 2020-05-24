'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempLogSchema= new Schema({
    uuid: {
        type: String,
        unique: true
    },
    insideTemp: Number,
    outsideTemp: Number,
    cpuTemp: Number,
    created: Date
})

module.exports = mongoose.model('TempLog', tempLogSchema)