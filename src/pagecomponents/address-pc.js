const { browser, element, by } = require("protractor");
const WaitUtils = require("../utils/waitutils");
module.exports = class AddressComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  btnProceedToCheckOut = element(
    by.css('[name="processAddress"]')
  );

  /**
   * Method to click Proceed To CheckOut Button
   */
  clickProceedToCheckOutButton() {
    this.waitUtil.waitForElementToBeClickable(
        this.btnProceedToCheckOut,
        15000,
        'Proceed To Checkout'
    );
    this.btnProceedToCheckOut.click();
  }
};
