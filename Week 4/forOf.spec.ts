import bookEvent from "../../Data/books.json"
 
for(let Event of bookEvent){

    console.log(`price of the books ${Event.price} \b`);
    console.log(`Edition of the books ${Event.Edition} \b`);
    console.log(`BookName is ${Event.book} \b`);
}