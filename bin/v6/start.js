import fromBase from "express-fix-any-js-from-base";

const startFunc = ({ jsFilePath, rulesJson, extractRegex,
  showLog = false, showLogStep1, showLogStep2, showLogStep3 }) => {

  let fromConsumption;

  let fromImport = fromBase({
    jsFilePath, rulesJson: rulesJson.forImport, extractRegex
  });

  if (fromImport.inserted || fromImport.found) {
    fromConsumption = fromBase({
      jsFilePath, rulesJson: rulesJson.forConsumption, extractRegex
    });
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
