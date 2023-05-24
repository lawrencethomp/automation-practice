const driver = require('./basepage');

function getWebSite(siteURL) {
  return driver.get(siteURL);
}

function closeWebSite() {
  driver.quit();
}
module.exports = {getWebSite, closeWebSite};