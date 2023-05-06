const fs = require("fs");

fs.writeFile('file2.txt' ,"today is awespme day",(err)=>{

    console.log("completed");
    console.log(err);
});



fs.appendFile('file2.txt'," i like games",(err)=>{
    console.log("DONE");
    console.log(err);
});

