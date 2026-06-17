function fibonacciSeries (number :any){
//0,1,1,2,3,5,8,12,20
var a = 0
var b = 1
console.log(a);
console.log(b);
 result = a + b 
 console.log(result); 
var result =0
//0,1,1,2,3,5,8,13,21
for (let index = 0; index <number; index++){
   result = result + b //0+1,1+1
   b =  result//a=1,a=1,
console.log(result);//2
if (result === 32){
   break
}
 }
}
fibonacciSeries (20)