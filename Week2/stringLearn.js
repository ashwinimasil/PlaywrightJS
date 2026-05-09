//filename extension cut with slice
let fileName = "firstProject.xlsx"
let extension=fileName.slice(-4)
console.log(extension);

//trim(),trimStart(),trimEnd() in strings
let name = "   Ashwini   tests test for her test  "
const string="Ashwini    "
const str1 = "Ashwini is at a park"
console.log(name.trim());//cuts the spaces
console.log(name.trimStart());//cuts the spaces in the start
console.log(string.trimEnd()); //cuts the spaces in the end
console.log(name.replace("test","examine"));//replaces only the first text
console.log(name.replaceAll("test","Examine"));//replaces all the texts
console.log(str1.split(" "));//splits the text by the element mentioned in the bracket
console.log(name.indexOf("s"));//finds the index of


  



