const {Builder, Browser, Key} = require('selenium-webdriver');
const pageURLs = require('../conf/urls');
const baseSiteUrl = pageURLs.mainPageUrl;

const getTextByClass  = require("../pageutils");
const { getWebSite, closeWebSite } = require("../utils/pageactions");

async function checkDefaultWelcomeMsg() {
    try {
      await getWebSite(baseSiteUrl);
      var notLoggedInText = await getTextByClass('not-logged-in');
    } finally {
      await closeWebSite();
      return notLoggedInText;
    }
}

module.exports = checkDefaultWelcomeMsg;



