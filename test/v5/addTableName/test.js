import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

// const currentFilePath = import.meta.filename;
// console.log(appJsPath);

// const currentDirPath = import.meta.dirname;

const result = index({
    showLog: true,
    inJsFilePath: appJsPath,
    inActionName: "table1",
    inFolderName: "Fold1",
    inGetType: "simple",
    showLogStep1: true,
    showLogStep2: true
});

console.log("Synchronous result : ", result);