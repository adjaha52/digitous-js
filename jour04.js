// OBJET
var cat= {
    name:"carfield",
    age:3,
    isCute:true
    
}
console.log(cat);
console.log(cat.age);
if (cat.isCute===true){
    console. log("so cute");

} else {
    console.log(" ");
}

// combine
var cat2= {
    name:"ange",
    age:21,
    isCute:false
} 
var cats=[cat,cat2];
console.log(cat.age);
console.log(cat["age"]);
console.log(cat2.isCute);
console.log(cat2["isCute"]);

//Even

function checkIfEven(num){
    if(num%2===0)
    {
        return "even";
    }
    else{
        return "odd";
    }
}
checkIfEven(20);