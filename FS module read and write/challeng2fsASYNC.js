const fs = require('fs');


fs.mkdir('./challenge2', (err)=>{
    console.log(err);
})

fs.writeFile('./challenge2/file3.txt', "hello i am challenge 2 file", (err)=>{
    console.log(err);
})

fs.readFile('./challenge2/file3.txt', "utf8" , (err , data)=>{
    console.log(data);
    console.log(err);
})

