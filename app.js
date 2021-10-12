const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

createFile(argv.b,argv.l,argv.h)
.then(msj=> console.log(msj))
.catch(error =>console.log("error al escribir el archivo"))



