const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)})
const actions = driver.actions({bridge: true});
// Elements that can be used in other project pages
// Basepage is going to have driver elements in it
// As well as action elements

class BasePage{
    constructor() {
        global.driver = driver;
        global.actions = actions;
    }

    async sleep() {
        await driver.sleep(250);
    }
    async click(element) {
        await actions.click(element).perform();
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

    async clickByClass(className) {
        await driver.findElement(By.className(className)).click();
    }

    async enterTextByName(name, text) {
        await driver.findElement(By.name(name)).sendKeys(text);
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