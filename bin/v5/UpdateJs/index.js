// import fixAnyJsforImport from "express-fix-any-js-from-for-import";

import fixAnyJsforImport from "./fixFromImport.js";
import forConsumption from "./fixFromConsumption.js";

import alterLines from "./alterLines.js";

const startFunc = ({ inJsFilePath, inActionName, inFolderName, showLog = false, inGetType }) => {
    if (showLog) console.log("inputs : ", inJsFilePath, inActionName, inFolderName, inGetType);

    const localCheckLines = alterLines({ inActionName, inFolderName, inGetType });

    let fromConsumption;

    let fromImport = fixAnyJsforImport({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.importInsertLine,
        parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
        searchString: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
    });

    if (showLog) console.log("fromImport : ", fromImport);

    if (fromImport.inserted || fromImport.found) {
        fromConsumption = forConsumption({
            jsFilePath: inJsFilePath,
            toInsertLine: localCheckLines.consumptionInsertLine,
            parseRegex: /router\.use\s*\(\s*["']([^"']+)["']\s*,\s*(\w+)\s*\)/,
            searchString: /^[ \t]*router\.use\b.*;\s*$/gm
        });

        if (showLog) console.log("fromConsumption : ", fromConsumption);
    };

    return {
        aboutImport: {
            ...fromImport?.inserted,
            ...fromImport?.found
        },
        aboutConsumption: {
            ...fromConsumption?.inserted,
            ...fromConsumption?.found
        }
    };
};

export default startFunc;
