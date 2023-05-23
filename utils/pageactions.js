const driver = require('./driver');

function getWebSite(siteURL) {
  return driver.get(siteURL);
}
exports.getWebSite = getWebSite;
function closeWebSite() {
  driver.quit();
}
exports.closeWebSite = closeWebSite;
