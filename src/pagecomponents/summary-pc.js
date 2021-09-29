const { browser, element, by } = require("protractor");

const WaitUtils = require("../utils/waitutils");
module.exports = class SummaryComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  lblProductName = element(by.css("td.cart_description p.product-name"));
  lblTotalPrice = element(by.id("total_price"));
  btnProceedToCheckOut = element(
    by.css('p.cart_navigation  a[title="Proceed to checkout"]')
  );

  /**
   * Method to retreive Product Name
   * @returns Promise<string>
   */
  retreiveProductName() {
    this.waitUtil.waitForElementToBeClickable(
      this.lblProductName,
      45000,
      "Product Name"
    );
    return this.lblProductName.getText();
  }

  /**
   * Method to retreive Total Cost of Product
   * @returns Promise<string>
   */
  retreiveTotalCostOfProduct() {
    return this.lblTotalPrice.getText();
  }

  /**
   * Method to click Proceed To CheckOut Button
   */
  clickProceedToCheckOutButton() {
    this.btnProceedToCheckOut.click();
  }
};
