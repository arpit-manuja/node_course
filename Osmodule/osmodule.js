const os = require("os");

console.log(os.arch());  //architecture
console.log(os.freemem()/1024/1024/1024);  //free memory
console.log(os.totalmem());
console.log(os.hostname());

