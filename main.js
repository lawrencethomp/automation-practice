const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

const baseSiteUrl = 'https://magento.softwaretestingboard.com/';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(baseSiteUrl);
  } finally {
    await driver.quit();
  }
})();
