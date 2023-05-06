const buffer = new Buffer.from("arpit");

buffer.write("ramandeep kaur");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());  //print integer value

