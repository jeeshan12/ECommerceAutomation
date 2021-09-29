/**
 * Method to click on expected item from list
 * @param elementArrayFinder ElementArrayFinder
 * @param elementName name of element to match
 */
function clickOnExpectedItem(elementArrayFinder, elementName) {
    elementArrayFinder.then(async eles =>{
        for (const ele of eles) {
            const txt =  await ele.getText();
            if (txt === elementName) {
                ele.click();
                break;
            }
        }
      });
}

module.exports = {
    clickOnExpectedItem: clickOnExpectedItem
}