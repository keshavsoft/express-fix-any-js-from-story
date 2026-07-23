import { isImportPresent } from "express-check-any-for-import";
import fromPatternCollector from "pattern-collector-anyjs";

import extractRegex from './extractRegex.js';

const checkUseDuplicate = ({ inContent, inFilePath, inSearchText }) => {
    const cleanText = inSearchText.match(/['"]([^'"]+)['"]/)?.[1] || inSearchText;
    const found = isImportPresent(inContent, cleanText) || inContent.includes(inSearchText);

    const k1 = fromPatternCollector({
        fileContent: inContent,
        extractRegex
    });

    console.log("aaaaaaaaa : ", k1);


    return {
        found,
        filePath: inFilePath,
        lineNumber: found ? inContent.split("\n").findIndex(line => line.includes(cleanText)) + 1 : null
    };
};

export default checkUseDuplicate;