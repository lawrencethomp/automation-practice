const driver = require('./driver');

function getWebSite(siteURL) {
  return driver.get(siteURL);
}

function closeWebSite() {
  driver.quit();
}
module.exports = {getWebSite, closeWebSite};