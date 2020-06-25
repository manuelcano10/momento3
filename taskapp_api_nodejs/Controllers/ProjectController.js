import Task from '../Models/ProjectModel';
let controller = {
    addTask: async (req, res) =>{
        const {task, date} = req.body;
        const newTask = new Task({task,date});
        await newTask.save();
        return res.status(200).json({
            response: "Task added successfully"
        });
    },
    createTask: (req,res) =>{
        return res.render('home');
    },
    getTask: async (req,res) =>{
        const id = req.query.id;
        //console.log(name);
        const task = await Task.findById({_id: id});
        return res.status(200).json({task});
    },
    listTasks: async (req,res) =>{
        const tasks = await Task.find({});
        //console.log(tasks);
        return res.json({tasks: tasks});
        //return res.status(200).json(tasks);
    },
    updateTask: async (req,res) =>{
        const {id,task,date} = req.body;
        await Task.findByIdAndUpdate(id,{task, date});
        return res.status(200).json({
            response: "Task updated successfully"
        });
    },
    deleteTask: async (req,res) =>{
        const {id} = req.body;
        await Task.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Task deleted successfully"
        });
    },
}

module.exports = controller;