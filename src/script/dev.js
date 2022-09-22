import { watch } from "fs";
import { WebSocketServer } from "ws";
import { distPath, resumePath, styleDirPath } from "#root/config.js";
import { exportMarkdown2Html } from "./util.js";

const wss = new WebSocketServer({ port: 9876 });

exportMarkdown2Html();

console.log("Open the file:", distPath);

wss.on("connection", function connection(ws) {
  [resumePath, styleDirPath].forEach(async (path) => {
    watch(path, () => {
      exportMarkdown2Html();
      ws.send();
    });
  });
});
