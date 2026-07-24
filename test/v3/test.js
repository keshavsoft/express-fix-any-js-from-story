import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import index from "../../index.js";

import getLatestVersion from "../../bin/core/getLatestVersion.js";
import checkLines from "./checkLines.json" with { type: "json" };

import extractRegex from './extractRegex.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

function runTests() {
    const latestVersion = getLatestVersion();

    const checkLinesString = checkLines;

    const output = index({
        showLog: true,
        jsFilePath: appJsPath,
        inCheckLines: checkLinesString,
        extractRegex
    });

    console.log("output : ", output);
};

runTests();
