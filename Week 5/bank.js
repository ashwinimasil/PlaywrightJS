"use strict";
/* Testleaf Trainer 23/05/2026 12:34 • First Breakout : Classroom : Union Type Alias

Classroom activity on union type :
------------------------------------*/
//Create a function that accepts only specific payment methods.
function bankingTransaction(Banktype) {
    if (Banktype === "UPI") {
        console.log("UPI is selected");
    }
    if (Banktype === "CreditCard") {
        console.log("CreditCard is selected");
    }
    if (Banktype === "PayPal") {
        console.log("PayPal is selected");
    }
}
bankingTransaction("UPI");
//Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
//Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.
//Call the function with "UPI" and "CreditCard" as arguments.
