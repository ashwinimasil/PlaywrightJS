/* function package(){
var message = "Hello Good morning - scoping inside block"
}
console.log("scoping outside the block",message);
package()*/

if(true){
var messageVar = "If var inside block"
}
console.log("if  var outside the block",messageVar);

if(true){
let messageLet = "If let inside block"
}
console.log("if let outside the block",messageLet);  

 if(true){
const messageConst = "If const inside block"
console.log(message);
}
console.log("if const outside the block",messageConst); 
