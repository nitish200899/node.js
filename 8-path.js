const path = require('path');

//property of a seperator (delimiter)
console.log(path.sep);

//method for joining path
const filePath = path.join('\content','subfolder','test.txt');
console.log(filePath);

//method for basename
const base  = path.basename(filePath);
console.log(base);

//method for absolute path
const absolute = path.resolve(__dirname,"content","subfolder","test.txt");
console.log(absolute);
