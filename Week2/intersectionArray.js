/* function intersection(array1, array2){
    let result=[]    
    for (let num of array1) {
        if (array1.includes(num) && !result.includes(num))
        result.push(num)
}
    console.log(result);
    return result
}
intersection([1,2,4,6,5,3],[5,2,3,1,4])
 */
function intersection1(Array1,Array2){
    let remaining =[]
for(let i=0;i<=Array1.length-1;i++){
    for(let j=0;j<=Array2.length;j++){
        // 1,5 or 1,2 or 1,3 or 1,1
        if(Array1[i]===Array2[j]){
            if (remaining.includes(Array1[i]))
            continue
            remaining.push(Array1[i])}  
           }
           }                
console.log(remaining);
return remaining
}
intersection1([1,2,3,4,5,9,2,3,10],[1,3,4,5,6,8,3,9,10])