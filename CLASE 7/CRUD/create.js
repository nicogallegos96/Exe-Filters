
const fs = require('fs');

const getTasks = require('./read');

const writeJSON = require('./write.JSON');

module.exports = function(title, desc){
    let newTask ={
        title: title,
        desc: desc,
    };

    let tasks = getTasks();

    tasks.push(newTask);

    writeJSON(tasks);

    return console.log("entrada creada con exito");
}