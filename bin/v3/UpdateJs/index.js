import alterFileForImport from "./common/AlterFileForImport/index.js";

const updateAppJs = ({ inJsFilePath, inCheckLines, extractRegex,
    showLog = false }) => {

    const localCheckLines = inCheckLines;

    const importResult = alterFileForImport({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.toInsertLine,
        duplicationCheck: localCheckLines.duplicationCheck,
        insertAfter: localCheckLines.insertAfter,
        extractRegex,
        showLog
    });

    return { importResult };
};

export default updateAppJs;