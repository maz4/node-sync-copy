const { copy, getFilesListArray } = require("./src/manageFiles");

const [inputArg, outputArg] = process.argv.slice(2);

const INPUT_DIR = "./input";
const OUTPUT_DIR = "./output";

const input = inputArg || INPUT_DIR;
const output = outputArg || OUTPUT_DIR;

const files = getFilesListArray(input);
const sortedFiles = files.sort((a, b) =>
  a.localeCompare(b, "en", { numeric: true })
);

copy({ files: sortedFiles, input, output, delay: 500 });
