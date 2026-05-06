//Declare a *global variable* named genderType with value "female". 
var genderType ="male"

//Create a function named *printGender*. 
function genderPrint(){

//Inside the function, declare a *function-scoped* variable color with value "brown" using let. 
let colour = "brown"
//Create an *if condition* that checks whether genderType starts with "female". 

if(genderType==="female"){
//Inside this if-block: 
//*	Declare a variable age = 30 using *var*. 
    var age =30
//*	Create a *block-scoped* variable color = "pink" using let. 
    let colour ="pink"
//*	Print the color inside the block and observe which value appears. 
    console.log("colour - block scope", colour);
}
//Outside the if-block but inside the function, print the value of age. 
console.log("Var Age - function &Block scoped ",age);
console.log("Let colour - function scope",colour);
console.log("var gender global - function scope",genderType);
}
//Call the function and print the value of genderType globally. 
genderPrint();
console.log("Gender global:"+genderType);
console.log("I am outside the function - colour, let block scoped",colour);
console.log("I am outside the function - Age, Var function & Block scoped",age);

//Now change the global variable named genderType with value “male” and observe the functionality of scoping in JavaScript. 

