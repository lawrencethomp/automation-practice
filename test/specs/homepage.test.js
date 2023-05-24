const homepage = require('./../../pages/homepage');
const checkString = require('./../utils/testutils');

const welcomeMsg = 'Default welcome msg!';
const aboutUsMsg = "About us";
const custServiceMsg = "Customer Service";
const searchTermsMsg = "Search Terms";
const cookiePrivacyMsg = "Privacy and Cookie Policy";
const advSearchMsg = "Advanced Search";
const ordersReturnsMsg = "Orders and Returns";
const contactUsMsg = "Contact Us";
const lumaYogaTitle = "Get fit and look fab in new seasonal styles";
const copyrightMsg = "Copyright © 2013-present Magento, Inc. All rights reserved.";


beforeEach(() => {
  homepage.goToURL("https://magento.softwaretestingboard.com");
});

afterEach(() => {
  homepage.closeBrowser();
});

test('Check that the Default Welcome Message is correctly formatted', async () => {
  const testWelcomeMsg = await homepage.checkDefaultWelcomeMsg();
  checkString(testWelcomeMsg, welcomeMsg);
 });

// I can see the logo

// I can see the About Us

// I can see the Subscribe Functionality

// I can see the Search Functionality

// I can see the Header bar

// I Can see the Cart

// I can see the Create an Account

// I can see the Default Logo

// I can see the banner Ad

// I can see the Hot Sellers

// Going with Strings here to simulate if there were multiple languages.

