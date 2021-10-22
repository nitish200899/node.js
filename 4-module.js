const names = require("./2-names")
const SayHi = require("./3-sayhi") ;
const data = require("./5-alternativeModule")
require("./6-mindGernade")

SayHi(names.john);
SayHi(names.peter);

console.log(data.Singleperson);