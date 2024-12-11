const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('tue.js','utf8');  //everything will be a string so whatever the 
// extension is it must give in a text format
console.log(data);

console.log("End");