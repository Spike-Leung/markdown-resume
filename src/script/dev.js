import { watch } from "fs";
import { WebSocketServer } from "ws";
import { distPath, resumePath, styleDirPath } from "#root/config.js";
import { convertMarkdown2Html, exportMarkdown2Html } from "./util.js";
const wss = new WebSocketServer({ port: 9876 });

exportMarkdown2Html();

wss.on("connection", function connection(ws) {
  watch(resumePath, async () => {
    const data = await convertMarkdown2Html()
    ws.send(data);
  });

  watch(styleDirPath, () => {
    ws.send('reload')
  });
});

console.log("Open the file:", distPath);
