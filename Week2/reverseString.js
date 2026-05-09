/* let name ="malayalam"
function reverseString(x)
{    
   let newName =name.split("")
   let sp =""
   size=name.length
    for(var i=size-1;i>=0;i--){
        var splitVar=sp+=newName[i]
         }
    console.log(splitVar);
    if(splitVar===name){
                console.log(`${name} is a palindrome`);
            }
            else{
                console.log(`${name} This is not a palindrome`);
                }
        }
reverseString(name) */

 
function reverseStr(input){
//Convert the input into characters 
inputLen=input.length
let finalText = ""
splitInput=input.split("")
for (let i=inputLen-1;i>=0;i--){
finalText = finalText.concat(splitInput[i])
}
 console.log("Reverse String is",finalText);
 if(finalText===input){
    console.log("It's a palindrome");
    }
    else {
        console.log("It's not a palindrome");
        
    }
}
 

//return concatenateText
reverseStr("malayalam")
/*2.	
3.	
4.	
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1.	Check if the reverse string and original string are the same 
2.	Return true if same, else the false. 
 
Hints to Solve:  
1.	Split string into characters using `split("")`. 
2.	Iterate backward through characters to build reversed string. 
3.	Use strict equality to compare original and reversed strings for palindrome check.  */
