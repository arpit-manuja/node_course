const fs = require("fs");

// fs.mkdirSync("challenge1"); 
//make folder

fs.writeFileSync("challenge1/arpit1.txt" , "hello i a made folder and create file into it");

//read file
const data = fs.readFileSync("challenge1/arpit.txt" , "utf8"); 
 //it directly convert it into string not in buffer data

console.log(data);

//it will deltet the file
fs.unlinkSync("challenge1/arpit.txt");

//it will deleet the folder
fs.rmdirSync("challenge1")



