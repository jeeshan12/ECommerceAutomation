const WaitUtils = require("../utils/waitutils");
const { browser, element, by } = require("protractor");
module.exports = class HeaderComponent {

    lblHeader = element(by.css("h1.page-heading"));

    constructor() {
        this.waitUtil = new WaitUtils();
      }
    /**
     * Method to retreive Header label
     * @returns Promise<string>
     */
    retreiveHeaderLabel() {
      this.waitUtil.waitForElementDisplay(this.lblHeader, 45000, "Header Label");
      return this.lblHeader.getText();
    }
}