function arrayLearn(){
    let array1 = ["a","b","c","d","e"]

    //removes the element at the end
    array1.pop()
    console.log("poped",array1);//pop

    // more than end element
    let array2=array1.splice(1,8)
    console.log(array1);//remaining element
    console.log("spliced element 1-8",array2);//spliced element

    //adds the elements
    const name = ["m","n","o","p"]
    name.push("z","y","w")
    console.log("adds to the array",name);
    return array2 
    }
    arrayLearn()