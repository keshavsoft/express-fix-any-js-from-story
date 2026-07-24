// import validateCheckLines from "./validateCheckLines.js";
import alterFileForImport from "./common/AlterFileForImport/index.js";
import alterFileForConsume from "./common/AlterFileForConsume/index.js";

const updateAppJs = ({ inJsFilePath, inCheckLines,
    showLog = false }) => {

    const localCheckLines = inCheckLines;

    // validateCheckLines(localCheckLines);

    const importResult = alterFileForImport({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.toInsertLine,
        duplicationCheck: localCheckLines.duplicationCheck,
        insertAfter: localCheckLines.insertAfter,
        showLog
    });

    // const useResult = alterFileForConsume({
    //     jsFilePath: inJsFilePath,
    //     toInsertLine: localCheckLines.useLines.toInsertLine,
    //     duplicationCheck: localCheckLines.useLines.duplicationCheck,
    //     insertAfter: localCheckLines.useLines.insertAfter,
    //     showLog
    // });

    // return { importResult, useResult };

    return { importResult };
};

export default updateAppJs;