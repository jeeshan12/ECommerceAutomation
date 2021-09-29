const { browser, element, by } = require("protractor");
const WaitUtils = require("../utils/waitutils");
module.exports = class ShippingComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  chkTermsOfService = element(by.css("#uniform-cgv + label"));

  btnProceedToCheckOut = element(by.css('[name="processCarrier"]'));

  /**
   * Method to click Proceed To Check Out Button
   */
  clickProceedToCheckOutButton() {
    this.waitUtil.waitForElementToBeClickable(
      this.btnProceedToCheckOut,
      15000,
      "Proceed To Checkout"
    );
    this.btnProceedToCheckOut.click();
  }

  /**
   * Method to click Terms of Service CheckBox
   */
  clickTermsOfServiceCheckBox() {
    this.waitUtil.waitForElementToBeClickable(
      this.chkTermsOfService,
      15000,
      "Terms of service checkbox"
    );
    this.chkTermsOfService.click();
  }
};
