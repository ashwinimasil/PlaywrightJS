function numberType(num){
   //condition to find if number is positive
    if(num>0){
        console.log("The number is positive",num);           
    }
    //condition to find if number is negative
   else if(num<0){
        console.log("The number is Negative",num);           
    }
    //condition to find if number is neutral
    else if(num===0){
        console.log("The number is neutral",num);           
    }
    //condition if not a number is entered
    else {
        console.log("Enter a number",num);           
    }
}
numberType(-25)