const fs = require('fs');

const andrewData = fs.readFileSync("1-json.json");
const dataBuffer = andrewData.toString();
const dataObject = JSON.parse(dataBuffer);
dataObject.name = "Deepak";
dataObject.planet = "Earth";
dataObject.age = "30";
const myData = JSON.stringify(dataObject);
fs.writeFileSync('1-json.json', myData);
console.log(myData);