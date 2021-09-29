const WaitUtils = require("../utils/waitutils");
const { browser, element, by } = require("protractor");
module.exports = class AddressInfoComponent {
  constructor() {
    this.waitUtil = new WaitUtils();
  }
  txtFirstName = element.all(by.id("customer_firstname")).last();
  txtlastName = element.all(by.id("customer_lastname")).last();
  txtAddress = element(by.id("address1"));
  txtCity = element(by.id("city"));
  txtMobile = element(by.id("phone_mobile"));
  txtAlias = element(by.id("alias"));
  txtPostalCode = element(by.id("postcode"));

  /**
   * Methdo to retreive first name
   * @returns Promise<string>
   */
  retriveFirstName() {
    return this.txtFirstName.getAttribute("value");
  }

  /**
   * Methdo to retreive last name
   * @returns Promise<string>
   */
  retreiveLastName() {
    return this.txtlastName.getAttribute("value");
  }

  /**
   * Method to enter address
   * @param {*} address
   */
  enterAddress(address) {
    this.txtAddress.sendKeys(address);
  }

  /**
   * Method to enter cityname
   * @param {*} cityName
   */
  enterCityName(cityName) {
    this.txtCity.sendKeys(cityName);
  }

  /**
   * Method to enter state name
   * @param {*} stateName
   */
  enterState(stateName) {
    this.waitUtil.waitForElementToBeClickable(
      element.all(by.css("select#id_state option")).first(),
      10000,
      "State Options"
    );
    const ddlState = element(
      by.cssContainingText("select#id_state option", stateName)
    );
    ddlState.click();
  }

  /**
   * Method to enter postal code
   * @param {*} postalCode
   */
  enterPostalCode(postalCode) {
    this.txtPostalCode.sendKeys(postalCode);
  }

  /**
   * Method to enter Mobile Number
   * @param {*} mobileNumber
   */
  enterMobileNumber(mobileNumber) {
    this.txtMobile.sendKeys(mobileNumber);
  }

  /**
   * Method to enter alias
   * @param {*} alias
   */
  enterAlias(alias) {
    this.txtAlias.sendKeys(alias);
  }
};
