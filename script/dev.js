const fs = require("fs");
const path = require("path");
const exportMarkdown2Html = require("./export.js");
const markdownFolder = path.resolve(__dirname, "../markdown");
const styleFolder = path.resolve(__dirname, "../style");
const config = require("../config/index.js");
const resumePath =
  config["resume-path"] || path.resolve(__dirname, "../markdown", "resume.md");

exportMarkdown2Html();

[resumePath, markdownFolder, styleFolder].forEach((path) => {
  fs.watch(path, (err) => {
    err && console.log(err);

    exportMarkdown2Html();
  });
});
