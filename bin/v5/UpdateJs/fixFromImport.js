import fixAnyJsforImport from "express-fix-any-js-from-for-import";

const startFunc = ({ jsFilePath, toInsertLine, parseRegex, searchString }) => {
    const fromFixAnyJs = fixAnyJsforImport({ jsFilePath, toInsertLine, parseRegex, searchString });

    return fromFixAnyJs;
};

export default startFunc;
