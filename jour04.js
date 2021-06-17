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
function checkIfEven(num) {
    if (num % 2=== 0){
        console.log( "even");
    }
    else {
        console.log("odd");
    }
}
var num = 7;
checkIfEven (num);

// compare
function compare(num1, num2){
    if (num1>num2) {
        console.log("num1 is bigger")
    }
    if (num2>num1) {
        console.log("num2 is bigger")
    }
    else {
        console.log("both are the same")
    }
}
var num1=12;
var num2=125;
compare(num1,num2);

// add up
function addUp(num){
    for (var i=1; i<= num; i++) {
        num+=i
        console.log(num)
    }
}
var num = 12;
addUp(num);






    