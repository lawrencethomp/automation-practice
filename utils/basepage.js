const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)})
// Elements that can be used in other project pages
// Basepage is going to have driver elements in it
// As well as action elements

// TODO: How does global work in Javascript again?
class BasePage{
    constructor() {
        global.driver = driver;
    }

    async goToURL(urlString) {
        await driver.get(urlString);
    }

    async enterTextByCSS(css, searchText) {
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }

    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    }

    async getTextByClass(className) {
        const notLoggedIn = await driver.findElement(By.className(className));
        await driver.wait(until.elementTextMatches(notLoggedIn, /./));
      
        return notLoggedIn.getText();
      }

    async closeBrowser() {
        await driver.quit();
    }
    
}

module.exports = {driver, BasePage};