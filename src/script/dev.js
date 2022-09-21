import fs from "fs";
import { WebSocketServer } from "ws";
import { distPath, resumePath, styleDirPath } from "#root/config.js";
import { exportMarkdown2Html, convertMd2Html } from "./util.js";
const wss = new WebSocketServer({ port: 9876 });

exportMarkdown2Html();

console.log("Open the file:", distPath);

wss.on("connection", function connection(ws) {
  fs.watch(resumePath, async () => {
    const newHtml = await convertMd2Html();
    ws.send(
      JSON.stringify({
        type: "content",
        data: newHtml,
      })
    );
  });

  fs.watch(styleDirPath, () => {
    ws.send(
      JSON.stringify({
        type: "style",
      })
    );
  });
});
