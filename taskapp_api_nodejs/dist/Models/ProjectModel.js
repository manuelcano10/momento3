"use strict";

var _mongoose = require("mongoose");

//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

var TaskSchema = new _mongoose.Schema({
    task: { type: String },
    date: { type: String }
});

module.exports = (0, _mongoose.model)("Task", TaskSchema);