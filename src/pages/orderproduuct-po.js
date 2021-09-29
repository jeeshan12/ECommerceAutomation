const SummaryComponent = require("../pagecomponents/summary-pc");
const AddressComponent = require("../pagecomponents/address-pc");
const ShippingComponent = require("../pagecomponents/shipping-pc");
const PaymentComponent = require("../pagecomponents/payment-pc");

module.exports = class OrderProductPage {
  constructor() {
    this.summaryComponent = new SummaryComponent();
    this.addressComponent = new AddressComponent();
    this.shippingComponent = new ShippingComponent();
    this.paymentComponent = new PaymentComponent();
  }

  /**
   * Method to return SummaryComponent reference
   * @returns SummaryComponent
   */
  getSummaryComponentReference() {
    return this.summaryComponent;
  }
  /**
   * Method to return AddressComponent reference
   * @returns AddressComponent
   */
  getAddressComponentReference() {
    return this.addressComponent;
  }
  /**
   * Method to return ShippingComponent reference
   * @returns ShippingComponent
   */
  getShippingComponentReference() {
    return this.shippingComponent;
  }
  /**
   * Method to return PaymentComponent reference
   * @returns PaymentComponent
   */
  getPaymentComponentReference() {
    return this.paymentComponent;
  }
};
