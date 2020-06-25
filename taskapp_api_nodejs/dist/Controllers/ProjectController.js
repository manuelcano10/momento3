'use strict';

var _ProjectModel = require('../Models/ProjectModel');

var _ProjectModel2 = _interopRequireDefault(_ProjectModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addTask: async function addTask(req, res) {
        var _req$body = req.body,
            task = _req$body.task,
            date = _req$body.date;

        var newTask = new _ProjectModel2.default({ task: task, date: date });
        await newTask.save();
        return res.status(200).json({
            response: "Task added successfully"
        });
    },
    createTask: function createTask(req, res) {
        return res.render('home');
    },
    getTask: async function getTask(req, res) {
        var id = req.query.id;
        //console.log(name);
        var task = await _ProjectModel2.default.findById({ _id: id });
        return res.status(200).json({ task: task });
    },
    listTasks: async function listTasks(req, res) {
        var tasks = await _ProjectModel2.default.find({});
        //console.log(tasks);
        return res.json({ tasks: tasks });
        //return res.status(200).json(tasks);
    },
    updateTask: async function updateTask(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            task = _req$body2.task,
            date = _req$body2.date;

        await _ProjectModel2.default.findByIdAndUpdate(id, { task: task, date: date });
        return res.status(200).json({
            response: "Task updated successfully"
        });
    },
    deleteTask: async function deleteTask(req, res) {
        var id = req.body.id;

        await _ProjectModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Task deleted successfully"
        });
    }
};

module.exports = controller;