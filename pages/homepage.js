const getTextByClass  = require("../pageutils");

async function checkDefaultWelcomeMsg() {
      const notLoggedInText = await getTextByClass('not-logged-in');
      return notLoggedInText;
}

module.exports = checkDefaultWelcomeMsg;



