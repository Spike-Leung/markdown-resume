const md = require("markdown-it")();
const emoji = require("markdown-it-emoji");
const marked = require("marked");
const fs = require("fs");
const path = require("path");
const config = require("../config/index.js");
const resumePath =
  config["resume-path"] || path.resolve(__dirname, "../markdown", "resume.md");
const distPath = path.resolve(__dirname, "../dist");
const targetHtmlPath = path.resolve(distPath, "resume.html");
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

      const writeFile = () => {
        fs.writeFile(targetHtmlPath, output, (err) => {
          err && console.error(err);

          console.log("please open file:", targetHtmlPath);
          console.log("print the html file with browser, and save as pdf");
        });
      };

      if (!fs.existsSync(targetHtmlPath)) {
        fs.mkdir(distPath, (err) => {
          err && console.log(err);
          writeFile();
        });
      } else {
        writeFile();
      }
    });
  });
}

module.exports = exportMarkdown2Html;
