function stringLastWord(){
//Split the string into an array of words 
    let word="Hello World"
//Find the last word in the array
    splitWord=word.split(" ")
//Calculate the length of this word
    console.log(splitWord[1].length);
    } 
stringLastWord()
 
function lastWord(){  
    let sentence ="   fly me   to   the moon  "
    //Trim the String  and Split the String into Words
   splitSentence=sentence.trim().replace(/\s+/g, " ").split(" ")
   //Identify the Last Word,its length and print
   console.log(splitSentence[4].length);       
   }
   lastWord()

function anagramWord(){
//Remove spaces and convert all letters to the same case
    let input1="listen" 
    split1=input1.split("")
    //console.log(split1);
    let input2="silent" 
    split2=input2.split("")
    //console.log(split2);
    //Sort the Characters 
    let a= split1.sort()
        console.log(a);
    let b= split2 .sort()
        console.log(b); 
//Compare Sorted Strings & Return the strings     
    if((a,b)=>b-a){
        console.log("It's an anagram");        
    }
    else
    {
        "It's not an anagram"
    }
   }
    anagramWord()