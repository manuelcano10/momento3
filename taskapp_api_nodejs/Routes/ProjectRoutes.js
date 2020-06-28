import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/listquotes', controller.listTasks);
router.get('/getquote', controller.getTask);
router.post('/addtask', controller.addTask);
router.delete('/deletetask', controller.deleteTask);
router.put('/updatetask', controller.updateTask);
router.get('/createtask', controller.createTask);
//router.get('/data', controller.data);

module.exports = router;