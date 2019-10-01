const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const jsonData = JSON.parse(dataBuffer);
console.log(`Before: ${dataBuffer}`);
jsonData.name = "Deepak";
jsonData.age = 27;
const data = JSON.stringify(jsonData);
fs.writeFileSync("1-json.json", data);
const afterWrite = fs.readFileSync("1-json.json");
console.log(`After: ${afterWrite}`);
