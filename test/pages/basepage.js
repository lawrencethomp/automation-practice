const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();
// Elements that can be used in other project pages
// Basepage is going to have driver elements in it
// As well as action elements

function getWebSite(siteURL) {
    return driver.get(siteURL);
  }
  
  function closeBrowser() {
    return driver.quit();
  }

module.exports = driver;