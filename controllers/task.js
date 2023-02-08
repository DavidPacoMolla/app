const Task = require("../models/task");

function createTask(req, res) {
    console.log("Creando nuestra primera tarea");
    console.log(req.body);
}

module.exports = { createTask };