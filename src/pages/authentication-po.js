const { browser, element, by } = require("protractor");
const WaitUtils = require("../utils/waitutils");

module.exports = class AuthenticatePage {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  txtEmail = element(by.id("email_create"));
  btnSubmitCreate = element(by.id("SubmitCreate"));
  txtRegisteredEmail = element(by.id("email"));
  txtPassword = element(by.id("passwd"));
  btnSignIn = element(by.id("SubmitLogin"));

  /**
   * Method to enter email
   * @param {*} email
   */
  enterEmail(email) {
    this.txtEmail.sendKeys(email);
  }

  /**
   * Method to click create Account button
   */
  clickCreateAnAccountButton() {
    this.waitUtil.waitForElementToBeClickable(
      this.btnSubmitCreate,
      25000,
      "Submit Create Button"
    );
    this.btnSubmitCreate.click();
  }

  /**
   * Method to perform signin
   * @param {*} email
   * @param {*} password
   */
  performSignin(email, password) {
    this.waitUtil.waitForElementToBeClickable(
      this.txtRegisteredEmail,
      20000,
      "Email"
    );
    this.txtRegisteredEmail.sendKeys(email);
    this.txtPassword.sendKeys(password);
    this.btnSignIn.click();
  }
};
