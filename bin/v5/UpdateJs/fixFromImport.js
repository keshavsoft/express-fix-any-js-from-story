import fixAnyJsforImport from "express-fix-any-js-from-for-import";

import packageJson from '../../../package.json' with {type: 'json'};

const startFunc = ({ jsFilePath, toInsertLine, parseRegex, searchString,
    showLog, showLogStep1, showLogStep2
}) => {

    const fromFixAnyJs = fixAnyJsforImport({
        jsFilePath, toInsertLine,
        parseRegex, searchString, showLog: showLogStep1,
        showLogStep1: showLogStep2
    });

    if (showLog) console.log(`${packageJson.name}-fixFromImport-inputs : `, fromFixAnyJs);

    return fromFixAnyJs;
};

export default startFunc;
