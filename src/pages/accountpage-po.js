const WaitUtils = require("../utils/waitutils");
const { browser, element, by } = require("protractor");
const AddressInfoComponent = require("../pagecomponents/addressinfo-pc");
const PersonalInfoComponent = require("../pagecomponents/personalinfo-pc");

module.exports = class AccountPage {
  constructor() {
    this.waitUtil = new WaitUtils();
    this.addressInfo = new AddressInfoComponent();
    this.personalInfo = new PersonalInfoComponent();
  }

  btnRegister = element(by.id("submitAccount"));

  /**
   * Method to click Regsiter Button
   */
  clickRegisterButton() {
    this.waitUtil.waitForElementToBeClickable(
      this.btnRegister,
      5000,
      "Register Button"
    );
    this.btnRegister.click();
  }
  /**
   * Method to get AddressInfoComponent Reference
   */
  getAddressInfoComponent() {
    return this.addressInfo;
  }

  /**
   * Method to get PersonalInfoComponent Reference
   */
  getPersonalInfoComponent() {
    return this.personalInfo;
  }
};
