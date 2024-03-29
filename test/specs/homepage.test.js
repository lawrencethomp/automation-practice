const homepage = require('./../../pages/homepage');
const checkString = require('./../utils/testutils');

const welcomeMsg = 'Click “Write for us” link in the footer to submit a guest post';
const aboutUsMsg = "About us";
const custServiceMsg = "Customer Service";
const searchTermsMsg = "Search Terms";
const cookiePrivacyMsg = "Privacy and Cookie Policy";
const advSearchMsg = "Advanced Search";
const ordersReturnsMsg = "Orders and Returns";
const contactUsMsg = "Contact Us";
const lumaYogaTitle = "Get fit and look fab in new seasonal styles";
const copyrightMsg = "Copyright © 2013-present Magento, Inc. All rights reserved.";


beforeAll(() => {
  homepage.goToURL("https://magento.softwaretestingboard.com");
});

afterAll(() => {
  homepage.closeBrowser();
});

test('Check that the Default Welcome Message is correctly formatted', async () => {
  const testWelcomeMsg = await homepage.checkDefaultWelcomeMsg();
  checkString(testWelcomeMsg, welcomeMsg);
 });

test('Check that a User can sign in', async () => {
  const checkSignInStr = await homepage.signIn();
  checkString('Welcome, lawrence fake!', checkSignInStr);
});

// Subscribe 

// Search 

// I can see the Header bar

// I Can see the Cart

// Create an Account

// I can see the Default Logo

// I can see the banner Ad

// I can see the Hot Sellers

// Going with Strings here to simulate if there were multiple languages.

