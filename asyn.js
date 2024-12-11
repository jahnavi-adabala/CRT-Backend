const fs = require('fs');

console.log("Start");

fs.readFile('tue.js', 'utf8',(err,data) => {
    if(err){
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

console.log("End");