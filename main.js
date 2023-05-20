const pageURLs = require('./test/conf/urls')
const driver = require('./test/pages/basepage');
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const baseSiteUrl = pageURLs.mainPageUrl;

(async function example() {
  try {
    await driver.get(baseSiteUrl);
    // Code to assert that things appear on page.
    const notLoggedIn = await driver.findElement(By.className('not-logged-in'));

    // Explicitly wait until the element has visible text
    await driver.wait(until.elementTextMatches(notLoggedIn, /./));

    const text = await notLoggedIn.getText();
    // Code to click something.
    
  } finally {
    await driver.quit();
  }
})();