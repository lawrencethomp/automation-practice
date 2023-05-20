const {Builder, Browser, Key} = require('selenium-webdriver');
const pageURLs = require('./test/conf/urls');
const baseSiteUrl = pageURLs.mainPageUrl;

const driver = require('./test/pages/basepage');
const getTextByClass  = require("./pageutils");

function getWebSite(siteURL) {
  return driver.get(siteURL);
}

async function checkDefaultWelcomeMsg() {
    try {
      await getWebSite(baseSiteUrl);
      var notLoggedInText = await getTextByClass('not-logged-in');
    } finally {
      await driver.quit();
      return notLoggedInText;
    }
}

module.exports = checkDefaultWelcomeMsg;


