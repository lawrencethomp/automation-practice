const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://magento.softwaretestingboard.com/');
  } finally {
    await driver.quit();
  }
})();
