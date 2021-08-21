const md = require("markdown-it")();
const emoji = require("markdown-it-emoji");
const marked = require("marked");
const fs = require("fs");
const path = require("path");
const config = require("../config/index.js");
const resumePath = config["resume-path"] || path.resolve(__dirname, "../markdown", "resume.md");
const targetHtmlPath = path.resolve(__dirname, "../dist", "resume.html");
const stylePath = path.resolve(__dirname, "../style", "index.css");

md.use(emoji);

function exportMarkdown2Html() {
  fs.readFile(resumePath, "utf8", (err, data) => {
    err && console.log(err);

    marked(md.render(data), (err, html) => {
      err && console.log(err);

      const output = `
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="${stylePath}"></link>
  </head>
</html>
<body class="markdown-body my-markdown-body">
  ${html}
</body>
`;

      fs.writeFile(targetHtmlPath, output, (err) => {
        err && console.error(err);
      });
    });
  });
}

module.exports = exportMarkdown2Html;
