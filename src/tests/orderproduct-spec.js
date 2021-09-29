const { browser, element, by } = require("protractor");
const faker = require("faker");
const LandingPage = require("../pages/landingpage-po");
const ContactUsPage = require("../pages/contactus-po");
const HeaderComponent = require("../pagecomponents/headercomponent");
const ProductPage = require("../pages/productpage-po");
const searchProductdata = require("../testdata/searchproduct.json");
const OrderProductPage = require('../pages/orderproduuct-po');
const AuthenticatePage = require('../pages/authentication-po');

describe("Order a prouct", () => {
  beforeEach(async () => {
    this.landingPage = new LandingPage();
    this.contactUsPage = new ContactUsPage();
    this.headerComponent = new HeaderComponent();
    this.authPage = new AuthenticatePage();
    this.productPage = new ProductPage();
    this.orderProductPage= new OrderProductPage();
    browser.waitForAngularEnabled(false);
    browser.navigate().to(browser.baseUrl);
  });
  it("S01: Search, add and order product", async () => {
    this.landingPage.searchProduct(searchProductdata.productname);
    expect(
      (await this.productPage.retriveSearchedProduct()).toLowerCase().replace(/"/g,"").trim()
    ).toBe(searchProductdata.productname.toLowerCase().trim());
    this.productPage.clickProudctFromTiles(0);
    expect(this.productPage.retreiveAddToCartMessage()).toBe(searchProductdata.addtocartmessage);
    const productName = await this.productPage.retreiveProductName();
    const productCost = await this.productPage.retreiveTotalCostOfProduct();
    this.productPage.clickProceedToCheckOutButton();
    expect(this.orderProductPage.getSummaryComponentReference().retreiveProductName()).toBe(productName);
    expect(this.orderProductPage.getSummaryComponentReference().retreiveTotalCostOfProduct()).toBe(productCost);
    this.orderProductPage.getSummaryComponentReference().clickProceedToCheckOutButton();
    this.authPage.performSignin(searchProductdata.email, searchProductdata.password);
    this.orderProductPage.getAddressComponentReference().clickProceedToCheckOutButton();
    this.orderProductPage.getShippingComponentReference().clickTermsOfServiceCheckBox();
    this.orderProductPage.getShippingComponentReference().clickProceedToCheckOutButton();
    expect(this.orderProductPage.getPaymentComponentReference().retreiveProductName()).toBe(productName);
    expect(this.orderProductPage.getPaymentComponentReference().retreiveTotalCostOfProduct()).toBe(productCost);
    this.orderProductPage.getPaymentComponentReference().clickPayByCheckLink();
    this.orderProductPage.getPaymentComponentReference().clickConfirmMyOrder();
    expect(this.orderProductPage.getPaymentComponentReference().retreiveOrderSuccessMessage()).toBe(searchProductdata.successmessage);
  });
});
