const { browser, element, by } = require("protractor");

const WaitUtils = require("../utils/waitutils");
const SignInTab = require("../pagecomponents/signin-pc");
const { TouchSequence } = require("selenium-webdriver");

module.exports = class LandingPage {
  constructor() {
    this.waitUtil = new WaitUtils();
    this.signInTab = new SignInTab();
  }

  txtSearch = element(by.id("search_query_top"));
  btnSearch = element(by.css(`[name="submit_search"]`));

  /**
   * Method to get SignInTab reference.
   * @returns SignInTab
   */
  getSignInTab() {
    return this.signInTab;
  }

  /**
   * Method to perform product search like jeans, tshirt etc.
   * @param {*} productName
   */
  searchProduct(productName) {
    this.waitUtil.waitForElementToBeClickable(
      this.txtSearch,
      45000,
      "Search Box"
    );
    this.txtSearch.sendKeys(productName);
    this.btnSearch.click();
  }
};
