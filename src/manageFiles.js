const fs = require("fs");
const path = require("path");
const { copyFileSync, readdirSync } = fs;

function getFilesListArray(location) {
  const files = [];
  const directory = readdirSync(location);
  directory.forEach((file) => {
    const fileExt = path.extname(file);
    if (fileExt != "") {
      files.push(file);
    }
  });

  return files;
}

async function copy({ files, input, output, delay = 0 }) {
  for (let i = 0; i < files.length; i++) {
    await new Promise((res) => setTimeout(res, delay));
    console.log("\nCopying " + files[i]);
    const inputFile = `${input}/${files[i]}`;
    const outputFile = `${output}/${files[i]}`;
    copyFileSync(inputFile, outputFile);
  }
}

module.exports = {
  getFilesListArray,
  copy,
};
