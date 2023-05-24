const getTextByClass  = require("../pageutils");
let {BasePage} = require('./../utils/basepage');


class HomePage extends BasePage{

  async checkDefaultWelcomeMsg() {
    const notLoggedInText = await getTextByClass('not-logged-in');
    return notLoggedInText;
}

};

async function checkDefaultWelcomeMsg() {
      const notLoggedInText = await getTextByClass('not-logged-in');
      return notLoggedInText;
}

module.exports = new HomePage();



