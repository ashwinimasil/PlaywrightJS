//var function & not block scoped
/* let browserName = "Chrome"
function getBrowserName(){
    console.log("browser name -inside the function", browserName);
                      if(browserName ==="Chrome"){
                  browserName = "IE"  
                  console.log("The browser inside the if block",browserName);
             }
        }
getBrowserName()
console.log("outside the block &function",browserName); */

//let function & block scoped 
//let browser="chrome"
/* function letBrowserName(){
let browser="chrome"
console.log("Inside the function",browser);
if (browser==="chrome"){
     console.log("I'm inside the if block",browser);
}
}
letBrowserName()
console.log("outside the function",browser); */

//const function & block scoped
function browserName(){
const browser= "chrome"
//Browser is declared as a constant & initialised
console.log("I am inside the function", browser);
if(browser==="chrome"){
console.log("I am inside the if block",browser);
}
}
browserName()
console.log("I am outside the function",browser);
