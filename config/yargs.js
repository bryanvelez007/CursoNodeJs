const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "list",
    type: "boolean",
  })
  .option("h",{
      alias:"hasta",
      type:"number"
  })
  .check((argv, options) => {
    if (isNaN(argv.b) | isNaN(argv.h)) {
      throw "la base debe ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;