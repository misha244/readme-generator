const fs = require("fs");

// TODO: Create a function to write README file
const writeToFile = (fileName, generatedMarkdown) => {
  const callback = (err) => {
    if (err) {
      console.log("An error occured!", err);
    } else {
      console.log("README successfully generated!");
    }
  };

  fs.appendFile(`./${fileName}.md`, generatedMarkdown, callback);
};

module.exports = writeToFile;
