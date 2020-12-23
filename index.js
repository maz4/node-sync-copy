const { copy, getFilesListArray } = require("./src/manageFiles");

const [inputArg, outputArg] = process.argv.slice(2);

const INPUT_DIR = "./input";
const OUTPUT_DIR = "./output";

const input = inputArg || INPUT_DIR;
const output = outputArg || OUTPUT_DIR;

const files = getFilesListArray(input);

copy({ files, input, output, delay: 500 });
