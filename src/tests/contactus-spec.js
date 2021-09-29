const { browser, element, by } = require("protractor");
const faker = require('faker');
const LandingPage = require('../pages/landingpage-po');
const ContactUsPage = require('../pages/contactus-po');
const HeaderComponent = require("../pagecomponents/headercomponent");
const contactusdata = require('../testdata/contactus.json');

describe('Raising a customer service request', () => {
    beforeEach(async () => {
        this.landingPage = new LandingPage();
        this.contactUsPage = new ContactUsPage();
        this.headerComponent = new HeaderComponent();
        browser.waitForAngularEnabled(false);
        browser.navigate().to(browser.baseUrl);
    });
    it('S02: Raising customer service request', async () => {
        this.landingPage.getSignInTab().clickContactUsLink();
        expect(this.headerComponent.retreiveHeaderLabel()).toBe(contactusdata.contactus);
        this.contactUsPage.selectSubjectHeading(contactusdata.customerservice);
        this.contactUsPage.enterEmailAddress(faker.internet.email());
        this.contactUsPage.enterOrderReference(`${faker.random.alphaNumeric(4)}_${faker.commerce.productName()}`);
        this.contactUsPage.uploadFile('../testdata/BabyYoda.jpeg');
        this.contactUsPage.enterMessageInTextArea(faker.lorem.sentence(20));
        this.contactUsPage.clickSendButton();
        expect(this.contactUsPage.retreiveSuccessMessage()).toBe(contactusdata.successmessage);
    });
});