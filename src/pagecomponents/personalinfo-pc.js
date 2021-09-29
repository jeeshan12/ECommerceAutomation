const WaitUtils = require("../utils/waitutils");
const { browser, element, by } = require("protractor");
const helperUtils = require("../utils/helperutil");
module.exports = class PersonalInfoComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }

  rBtnTitle = element.all(by.css("div.radio-inline label"));
  txtFirstName = element.all(by.id("customer_firstname")).first();
  txtlastName = element.all(by.id("customer_lastname")).first();
  txtEmail = element(by.id("email"));
  txtPassword = element(by.id("passwd"));

  /**
   * Method to select Title
   * @param {*} title
   */
  clickTitleRadioButton(title) {
    this.waitUtil.waitForElementToBeClickable(
      this.rBtnTitle.first(),
      45000,
      "Title Radio Button"
    );
    helperUtils.clickOnExpectedItem(this.rBtnTitle, title);
  }

  /**
   * Method to enter first name
   * @param {*} firstName
   */
  enterFirstName(firstName) {
    this.txtFirstName.sendKeys(firstName);
  }
  /**
   * Method to enter last name
   * @param {*} lastName
   */
  enterLastName(lastName) {
    this.txtlastName.sendKeys(lastName);
  }

  /**
   * Method to retreive email
   * @returns Promise<string>
   */
  retreiveEmail() {
    return this.txtEmail.getAttribute("value");
  }

  /**
   * Method to click Email Field
   */
  clickEmailField() {
    this.txtEmail.click();
  }

  /**
   * Method to enter Password
   * @param {*} password
   */
  enterPassword(password) {
    this.txtPassword.sendKeys(password);
  }

  /**
   * Method to enter DOB in DD Month Year
   * @param {*} date
   * @param {*} month
   * @param {*} year
   */
  enterDOB(date, month, year) {
    const ddlDate = element(by.cssContainingText("select#days option", date));
    const ddlMonth = element(
      by.cssContainingText("select#months option", month)
    );
    const ddlYear = element(by.cssContainingText("select#years option", year));
    ddlDate.click();
    ddlMonth.click();
    ddlYear.click();
  }
};
