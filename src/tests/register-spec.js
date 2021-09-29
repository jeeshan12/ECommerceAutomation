const { browser, element, by } = require("protractor");
const registerdata = require('../testdata/registeruser.json');
const faker = require('faker');
const LandingPage = require('../pages/landingpage-po');
const AuthenticatePage = require('../pages/authentication-po');
const AccountPage = require('../pages/accountpage-po');
const HeaderComponent = require("../pagecomponents/headercomponent");

describe('Register a new User', () => {
    beforeEach(async () => {
        this.landingPage = new LandingPage();
        this.authPage = new AuthenticatePage();
        this.accountPage = new AccountPage();
        this.headerComponent = new HeaderComponent();
        browser.waitForAngularEnabled(false);
        browser.navigate().to(browser.baseUrl);
    });
    it('S03: New User Registration', async () => {
        const email = faker.internet.email();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const password = faker.internet.password(8);
        this.landingPage.getSignInTab().clickSignInLink();
        expect(this.headerComponent.retreiveHeaderLabel()).toBe(registerdata.authenticationLabel);
        this.authPage.enterEmail(email);
        this.authPage.clickCreateAnAccountButton();
        this.accountPage.getPersonalInfoComponent().clickTitleRadioButton(registerdata.title);
        this.accountPage.getPersonalInfoComponent().enterFirstName(firstName);
        this.accountPage.getPersonalInfoComponent().enterLastName(lastName);
        expect(this.accountPage.getPersonalInfoComponent().retreiveEmail()).toBe(email);
        this.accountPage.getPersonalInfoComponent().clickEmailField();
        this.accountPage.getPersonalInfoComponent().enterPassword(password);
        this.accountPage.getPersonalInfoComponent().enterDOB(registerdata.day, registerdata.month, registerdata.year);
        expect(this.accountPage.getAddressInfoComponent().retriveFirstName()).toBe(firstName);
        expect(this.accountPage.getAddressInfoComponent().retreiveLastName()).toBe(lastName);
        this.accountPage.getAddressInfoComponent().enterAddress(faker.address.streetAddress());
        this.accountPage.getAddressInfoComponent().enterCityName(faker.address.cityName());
        this.accountPage.getAddressInfoComponent().enterState(registerdata.state);
        this.accountPage.getAddressInfoComponent().enterPostalCode(registerdata.postalcode);
        this.accountPage.getAddressInfoComponent().enterMobileNumber(registerdata.phoneNumber);
        this.accountPage.getAddressInfoComponent().enterAlias(faker.address.cityPrefix());
        this.accountPage.clickRegisterButton();
        this.landingPage.getSignInTab().clickLogoutLink();
    }, 3000000);
});