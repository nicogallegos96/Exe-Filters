
const fs = require('fs');

module.exports = function(data) {
    let stringyfiedData = JSON.stringify(data, null, 2);

    return fs.writeFileSync("../tasksData.json", stringyfiedData);

}