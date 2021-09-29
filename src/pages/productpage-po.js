const { browser, element, by } = require("protractor");

const WaitUtils = require("../utils/waitutils");

module.exports = class ProductPage {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  lblSearchedProduct = element(by.css("span.lighter"));
  liProduct = element.all(by.css(`ul li div.product-container`));
  lblAddToCartMessage = element(by.css("div.layer_cart_product h2"));
  lblProductName = element(
    by.css(
      "div.layer_cart_product div.layer_cart_product_info span.product-name"
    )
  );
  lblCartTotal = element(
    by.css(`div.layer_cart_cart span[class*='cart_total']`)
  );
  btnProceedToCheckOut = element(by.css('[title="Proceed to checkout"]'));

  /**
   * Method to return  Searched Results
   * @returns Promise<string>
   */
  retriveSearchedProduct() {
    this.waitUtil.waitForElementToBeClickable(
      this.lblSearchedProduct,
      25000,
      "Searched Product Label"
    );
    return this.lblSearchedProduct.getText();
  }

  /**
   * Method to click product in tiles
   * @param {*} index
   */
  clickProudctFromTiles(index) {
    this.waitUtil.waitForElementToBeClickable(
      this.liProduct.first(),
      15000,
      "Products List"
    );
    browser
      .actions()
      .mouseMove(this.liProduct.get(index).getWebElement())
      .perform();

    const btnAddToCart = this.liProduct
      .get(index)
      .element(by.css(`[title="Add to cart"]`));
    this.waitUtil.waitForElementToBeClickable(
      btnAddToCart,
      15000,
      "Add To Cart Button"
    );
    browser
      .actions()
      .mouseMove(btnAddToCart.getWebElement())
      .click()
      .click()
      .perform();
  }

  /**
   * Method to retreive Add to Cart Message
   * @returns Promise<String>
   */
  retreiveAddToCartMessage() {
    this.waitUtil.waitForTimeOut(4);
    this.waitUtil.waitForElementToBeClickable(
      this.lblAddToCartMessage,
      35000,
      "Add to Cart Message"
    );
    return this.lblAddToCartMessage.getText();
  }
  /**
   * Method to retreive Product name
   * @returns Promise<String>
   */
  retreiveProductName() {
    return this.lblProductName.getText();
  }
  /**
   * Method to retreive Total Cost of Product
   * @returns Promise<String>
   */
  retreiveTotalCostOfProduct() {
    return this.lblCartTotal.getText();
  }
  /**
   * Method to click Proceed To CheckOut Button.
   */
  clickProceedToCheckOutButton() {
    this.btnProceedToCheckOut.click();
  }
};
