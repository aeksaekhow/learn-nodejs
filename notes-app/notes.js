const fs = require('fs');

const getNotes = function(filePath) {

    const fileContent = fs.readFileSync(filePath).toString();
    return fileContent;
}

module.exports = {

    getNotes: getNotes
};