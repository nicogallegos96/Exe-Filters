const fs = require('fs');

module.exports = function(){

    let readFile = fs.readFileSync('../tasksData.json', 'utf-8');

    let parsedJson = JSON.parse(readFile);

    return parsedJson;
}