const WaitUtils = require("../utils/waitutils");
const { browser, element, by } = require("protractor");

module.exports = class SignInTab {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  lnkContactUs = element(by.css("#contact-link"));
  lnkSignIn = element(by.css("div.header_user_info a"));
  lnkLogOut = element(by.css("a.logout"));

  /**
   * Method to click Contact us link
   */
  clickContactUsLink() {
    this.waitUtil.waitForElementToBeClickable(
      this.lnkContactUs,
      30000,
      "Contact Us"
    );
    this.lnkContactUs.click();
  }

  /**
   * Method to click Sign in link
   */
  clickSignInLink() {
    this.waitUtil.waitForElementToBeClickable(this.lnkSignIn, 30000, "Sign In");
    this.lnkSignIn.click();
  }

  /**
   * Method to perform logout.
   */
  clickLogoutLink() {
    this.waitUtil.waitForElementToBeClickable(
      this.lnkLogOut,
      30000,
      "LogOut Link"
    );
    this.lnkLogOut.click();
  }
};
