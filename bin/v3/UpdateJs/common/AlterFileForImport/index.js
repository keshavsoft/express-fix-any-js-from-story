import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../writeFile.js";

import buildUpdatedContent from "./buildUpdatedContent.js";

import getStory from "pattern-collector-anyjs";

import extractRegex from './extractRegex.js';

const alterFile = ({
    jsFilePath,
    toInsertLine,
    duplicationCheck,
    insertAfter = [],
    showLog = false
}) => {
    const content = readFile(jsFilePath);

    const fromPatternCollector = getStory({
        fileContent: content,
        extractRegex
    });
    // fromPatternCollector. summary.    importSummary. minLineNumber


    const duplicateInfo = checkDuplicate({
        inSearchText: duplicationCheck,
        inFileContentAsStory: fromPatternCollector
    });

    if (duplicateInfo.found) {
        if (showLog) {
            console.log(
                `Duplicate found at line ${duplicateInfo.lineNumber}`
            );
        };

        return duplicateInfo;
    };

    const updated = buildUpdatedContent({
        content,
        insertInfo: fromPatternCollector.summary.importSummary.minLineNumber,
        toInsertLine,
        insertAfter
    });

    // console.log("aaaaaaaaaaaaaa : ", updated);
    // writeFile(jsFilePath, updated, fromPatternCollector.summary.importSummary.minLineNumber, toInsertLine);
    writeFile({
        inJsFilePath: jsFilePath,
        inInsertLineIndex: fromPatternCollector.summary.importSummary.minLineNumber,
        toInsertLine
    });

    return {
        found: false,
        filePath: jsFilePath,
        lineNumber: null
    };
};

export default alterFile;