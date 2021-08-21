const fs = require("fs");
const path = require("path");
const exportMarkdown2Html = require("./export.js");
const markdownFolder = path.resolve(__dirname, "../markdown");
const styleFolder = path.resolve(__dirname, "../style");

exportMarkdown2Html();


fs.watch(markdownFolder, (err) => {
  err && console.log(err);

  exportMarkdown2Html();
});

fs.watch(styleFolder, (err) => {
  err && console.log(err);

  exportMarkdown2Html();
});
