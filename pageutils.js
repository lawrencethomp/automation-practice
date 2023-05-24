const { By, until } = require('selenium-webdriver');
const {driver} = require('./utils/basepage');


async function getTextByClass(className) {
  const notLoggedIn = await driver.findElement(By.className(className));
  await driver.wait(until.elementTextMatches(notLoggedIn, /./));

  return notLoggedIn.getText();
}

module.exports = getTextByClass;
