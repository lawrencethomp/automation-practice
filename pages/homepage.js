let {BasePage} = require('./../utils/basepage');


class HomePage extends BasePage{

  async checkDefaultWelcomeMsg() {
    const notLoggedInText = await this.getTextByClass('not-logged-in');
    return notLoggedInText;
  }

  async signIn() {
    await this.clickByClass('authorization-link');
    await this.enterTextByName('login[username]', 'lawrencethomp@gmail.com');
    await this.enterTextByName('login[password]', 'changeMe123!');
    await this.clickByClass('action login primary');
    await this.sleep();
    const loggedInText = await this.getTextByClass('logged-in');
    return loggedInText;
  }

// TODO: Generate a Create an Account Function
  //  Write out steps for creating an account

  //  Grab Locators for creating an account
  
  //  Decide on Locator for creating an account
  
  async createAccount(){
    
  }

};

module.exports = new HomePage();



