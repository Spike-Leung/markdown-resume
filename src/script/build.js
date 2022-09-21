import { distPath } from "#root/config.js";
import { exportMarkdown2Html } from "./util.js";

exportMarkdown2Html();

console.log("Open the file:", distPath);
console.log("Print the html file in browser, and save as pdf");
