//named function
/* function add(a,b){
    c=a+b
    console.log(`${c}`);
   return c
}
add(5,6) */

//function expression
/* let y=function(a,b){
    let c =a+b
    console.log(`${c}`);
    return c
}
console.log(y(5,4)); */

//arrow function or anonymous
/* const y=(a,b)=>a*b
console.log(y(18,10));
 */

//call back function
function friend(a, b){
console.log("friend");

    a()
    b()
}
function schoolFriendInvite (){
console.log("Invite all our school friends");
}
function collegeFriendInvite(){
console.log("Invite all our College friends");
}

friend (collegeFriendInvite,schoolFriendInvite)