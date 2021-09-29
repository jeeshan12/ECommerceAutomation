const { browser, element, by, protractor } = require('protractor');
const EC = protractor.ExpectedConditions;

module.exports = class WaitUtils {

    constructor() {

    }

  /**
   * wait for element to be present
   * @param webElement
   * @param timeOutInMilliSeconds
   */
  waitForElementDisplay(
    elementFinder,
    timeInMilliSeconds,
    message
  ) {
    browser.wait(
      function () {
        return browser.isElementPresent(elementFinder);
      },
      timeInMilliSeconds,
      message + " did not load in " + timeInMilliSeconds / 1000 + " secs"
    );
  }


  /**
   * wait for element to be enabled and clickable
   * @param webElement
   * @param timeInMilliSeconds
   */
  waitForElementToBeClickable(
    elementFinder,
    timeInMilliSeconds,
    message
  ) {
    browser.wait(
      EC.elementToBeClickable(elementFinder),
      timeInMilliSeconds,
      message +
        " not clickable in " +
        timeInMilliSeconds / 1000 +
        " secs"
    );
  }

  /**
   * wait for a specified interval
   * @param timeOutInSeconds
   */
  waitForTimeOut(timeOutInSeconds) {
    browser.sleep(timeOutInSeconds * 1000);
  }

  /**
   * wait for an element to disappear
   */
  waitForElementDisappear(
    elementFinder,
    timeInMilliSeconds,
    message
  ) {
    browser.wait(
      EC.invisibilityOf(elementFinder),
      timeInMilliSeconds,
      message +
        " did not close in " +
        timeInMilliSeconds / 1000 +
        " secs"
    );
  }


}

