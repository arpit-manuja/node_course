const fs = require("fs");


fs.readFile("file2.txt" , "UTF-8" ,(err , data)=>{
    console.log(data);

    console.log(err);

} )