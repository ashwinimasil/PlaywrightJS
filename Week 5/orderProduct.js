"use strict";
class order {
    productName;
    oID = "ORD123";
    price = "344";
    placeOrder() {
        console.log(`Order placed for ${this.productName} with order id ${this.oID}`);
    }
    cancelOrder() {
        console.log(`Order cancelled for ${this.productName}`);
    }
    constructor(pName) {
        this.productName = pName;
        console.log(`I am a constructor, check the ${this.productName} before you purchase`);
    }
}
const ord = new order("iPhone15");
ord.placeOrder();
ord.cancelOrder();
