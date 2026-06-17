"use strict";
class LoginPage5 {
    //GLobal property/variable
    // browserName = "Chrome"
    // url = "https://leaftaps.com/opentaps/control/main"
    browserName; // globall declaration
    url;
    constructor() {
        this.browserName = "Chrome"; // Local variable  // here the global property is assigned a value
        this.url = "https://leaftaps.com/opentaps/control/main";
    }
    launch() {
        console.log(this.browserName); //fetch //consuming the data
    }
    get readData() {
        return this.url;
        // Here readData() is returing a property and that is the reason why when we call it we dont use method bracket
    }
    set writeData(newURL) {
        this.url = newURL;
    }
}
const lop5 = new LoginPage5();
lop5.launch();
console.log(lop5.readData); // old url
lop5.writeData = "https://www.w3schools.com";
console.log(lop5.readData); // new url
/* public :
private :
protected : *Thank you for your business! We look forward to working with you again.*/ 
