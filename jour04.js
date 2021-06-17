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
    while (  i<= num ) {
        num+=i;
        i++
        }
}
console.log(num);
var i=1
var num = 12;

// time
function format(num){
    var left= num
    var result=0;
    var heure= Math.floor(left/3600);
    left -= heure*3600;
    var minutes= Math.floor(left/60);
    left-= minutes*60;
    var secondes=left;
    if (heure>0) {
        result=result+heure+":";
    }
    if(minutes>0){
        result=result+minutes+ ":";
    }
    if (secondes>0){
        result=result+secondes+ ":";
    }
    return result;
}
format (3700);











    