import checkLines from "./checkLines.json" with {type: "json"};

const checkLinesKeys = Object.keys(checkLines);

const startFunc = ({ inActionName, inFolderName, inGetType }) => {
    let checkLinesData = checkLines;

    let localCheckLines = JSON.parse(JSON.stringify(checkLinesData));

    if (localCheckLines.importInsertLine) {
        localCheckLines.importInsertLine = localCheckLines.importInsertLine.replaceAll("${folderName}", inFolderName);
    };

    if (localCheckLines.consumptionInsertLine) {
        localCheckLines.consumptionInsertLine = localCheckLines.consumptionInsertLine.replaceAll("${folderName}", inFolderName);
        localCheckLines.consumptionInsertLine = localCheckLines.consumptionInsertLine.replaceAll("${endpoint}", inActionName);
    };

    return localCheckLines;
};

export default startFunc;
