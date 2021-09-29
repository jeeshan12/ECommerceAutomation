const { browser, element, by } = require("protractor");
const WaitUtils = require("../utils/waitutils");
const path = require("path");
const remote = require("../../node_modules/selenium-webdriver/remote");

module.exports = class ContactUsPage {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  lblSuccessMessage = element(by.css("p.alert-success"));
  txtEmail = element(by.id("email"));
  txtOrderReference = element(by.id("id_order"));
  txtFileUpload = element(by.css('input[type="file"]'));
  btnSend = element(by.id("submitMessage"));
  txtAreaMessage = element(by.id("message"));

  /**
   * Method to retreive success message
   * @returns
   */
  retreiveSuccessMessage() {
    this.waitUtil.waitForElementDisplay(
      this.lblSuccessMessage,
      25000,
      "Success Message"
    );
    return this.lblSuccessMessage.getText();
  }

  /**
   * Method to select Subject Heading
   * @param {*} contact
   */
  selectSubjectHeading(contact) {
    const option = element(by.cssContainingText("#id_contact option", contact));
    this.waitUtil.waitForElementToBeClickable(option, 25000, "Subject Heading");
    option.click();
  }

  /**
   * Method to enter email address
   * @param {*} emailAddress
   */
  enterEmailAddress(emailAddress) {
    this.txtEmail.sendKeys(emailAddress);
  }

  /**
   * Method to enter order reference
   * @param {*} orderReference
   */
  enterOrderReference(orderReference) {
    this.txtOrderReference.sendKeys(orderReference);
  }

  /**
   * Method to upload file
   * @param {*} filePath
   */
  uploadFile(filePath) {
    const absolutePath = path.resolve(__dirname, filePath);
    browser.setFileDetector(new remote.FileDetector());
    this.txtFileUpload.sendKeys(absolutePath);
  }

  /**
   * Method to click Send Button
   */
  clickSendButton() {
    this.waitUtil.waitForElementToBeClickable(
      this.btnSend,
      25000,
      "Send Button"
    );
    this.btnSend.click();
  }

  /**
   * Method to enter text in message area
   * @param {*} message
   */
  enterMessageInTextArea(message) {
    this.txtAreaMessage.sendKeys(message);
  }
};
