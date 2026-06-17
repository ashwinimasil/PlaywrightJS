"use strict";
function factorialPgm(number) {
    let result = 1;
    if (number < 0) {
        console.log("Enter only a positive number");
    }
    else if (number > 0) {
        for (let index = 1; index <= number; index++) { // 5*4*3*2*1
            result = result * index; //1*5
        } //5*4
    }
    console.log(result);
}
factorialPgm(5);
