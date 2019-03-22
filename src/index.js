module.exports = function check(str, bracketsConfig) {
  let tempStr = str;
  //(2) skan string from the end
  for (let strKey = tempStr.length; strKey >= 0; strKey--) {
    // (3) compare with config
    for (
      let bracketsKey = 0;
      bracketsKey < bracketsConfig.length;
      bracketsKey++
    ) {
      if (tempStr[strKey] === bracketsConfig[bracketsKey][0]) {
        tempStr = tempStr.replace(bracketsConfig[bracketsKey].join(""), "");
      }
    }
  }
  return tempStr === ""; //(1) true - all pairs removed
};
