import fixAnyJsforImport from "express-fix-any-js-from-base";

import packageJson from '../../../package.json' with {type: 'json'};

const startFunc = ({ jsFilePath, rulesJson, extractRegex,
    showLog = false, showLogStep1, showLogStep2, showLogStep3
}) => {

    const fromFixAnyJs = fixAnyJsforImport({
        jsFilePath, rulesJson, extractRegex,
        showLog = false, showLogStep1, showLogStep2, showLogStep3
    });

    return fromFixAnyJs;
};

export default startFunc;
