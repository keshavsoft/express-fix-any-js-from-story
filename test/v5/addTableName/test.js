import path from "path";
import index from "../../../index.js";

const result = index({
    showLog: true,
    endPointsJsPath: path.join(process.cwd(), "routes.js"),
    inActionName: "table1",
    inFolderName: "Fold1",
    inGetType: "simple"
});

console.log("Synchronous result : ", result);