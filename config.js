import path from "path"
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// update to your resume.md path
export const resumePath = path.resolve(__dirname, "./src/resume.md")
// export const resumePath = "/Users/spike/Dropbox/resume/resume.md"

export const distPath = path.resolve(__dirname, "./dist", "resume.html")
export const stylePath = path.resolve(__dirname, "./src/style/index.css")
export const styleDirPath = path.resolve(__dirname, "./src/style")
export const websocketPath = path.resolve(__dirname, "./src/script/ws.js")
