import path from "path";
import index from "../../../index.js";

// const currentFilePath = import.meta.filename;
// console.log(currentFilePath);

const currentDirPath = import.meta.dirname;

const result = index({
    showLog: true,
    endPointsJsPath: path.join(currentDirPath, "routes.js"),
    inActionName: "table1",
    inFolderName: "Fold1",
    inGetType: "simple",
    showLogStep1: true,
    showLogStep2: true
});

console.log("Synchronous result : ", result);