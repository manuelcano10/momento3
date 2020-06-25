import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    task: {type: String},
    date: {type: String},
});

module.exports = model("Task",TaskSchema);