const fs = require('fs');

const jsonFileName = '1-json.json';
const personJSON = fs.readFileSync(jsonFileName).toString();
const personObj = JSON.parse(personJSON);

personObj.name = 'Aek Sae-khow';
personObj.planet = 'Marc';
personObj.age = 29;

fs.writeFileSync(jsonFileName, JSON.stringify(personObj));
