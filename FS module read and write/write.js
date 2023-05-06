const fs  = require("fs");


//make file sync
fs.writeFileSync('file1.txt' , "Hello i am arpit");

//rewrite the file  --- delete everything and write 
fs.writeFileSync('file1.txt' , " my name is Arpit")

//dont overwrite , write in file without delteing previous data
fs.appendFileSync('file1.txt' , " and i study in LPU");

// fs.writeFileSync('file2.txt' , "k");
fs.renameSync('file2.txt' , 'renamedfile.txt');

