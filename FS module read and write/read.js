const fs = require("fs");

const buffer_data =  fs.readFileSync("file1.txt")

console.log(buffer_data); //this will print buffer data

const real_data = buffer_data.toString();  //convert it into string

console.log(real_data);


//rename