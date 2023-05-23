const getTextByClass  = require("../pageutils");

async function checkDefaultWelcomeMsg() {
      var notLoggedInText = await getTextByClass('not-logged-in');
      return notLoggedInText;
}

module.exports = checkDefaultWelcomeMsg;



