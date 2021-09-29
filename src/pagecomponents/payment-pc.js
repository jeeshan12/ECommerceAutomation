const { browser, element, by } = require("protractor");
const WaitUtils = require("../utils/waitutils");
module.exports = class PaymentComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  lblProductName = element(by.css("td.cart_description p.product-name"));
  lblTotalPrice = element(by.id("total_price"));
  lnkPayByCheck = element(by.css('[title="Pay by check."]'));
  btnConfirmMyOrder = element(by.css('p.cart_navigation [type="submit"]'));
  lblSuccessMessage = element(by.css("p.alert-success"));

  /**
   * Method to retreive Product name
   * @returns Promise<string>
   */
  retreiveProductName() {
    this.waitUtil.waitForElementToBeClickable(
      this.lblProductName,
      15000,
      "Product Name"
    );
    return this.lblProductName.getText();
  }
  /**
   * Method to retreive Total cost of product
   * @returns Promise<string>
   */
  retreiveTotalCostOfProduct() {
    return this.lblTotalPrice.getText();
  }

  /**
   * Method to click Pat By Check Link
   */
  clickPayByCheckLink() {
    this.lnkPayByCheck.click();
  }

  /**
   * Method to click Confirm My Order
   */
  clickConfirmMyOrder() {
    this.waitUtil.waitForElementToBeClickable(
      this.btnConfirmMyOrder,
      15000,
      "Confirm My Order"
    );
    this.btnConfirmMyOrder.click();
  }

  retreiveOrderSuccessMessage() {
    this.waitUtil.waitForElementToBeClickable(
      this.lblSuccessMessage,
      15000,
      "Success Message"
    );
    return this.lblSuccessMessage.getText();
  }
};
