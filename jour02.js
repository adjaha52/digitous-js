//integer et float*
var integer="105";
var float= "13.9";
console.log(integer);
console.log(float);

// convert
var basic=34;
var stringified= basic.toString() ;
console.log (stringified);

//Round
var num= 1.5;
var rounded= Math.round(num);
console.log (rounded);

//Arithmetique
var test= 12;
var bis= 5;
console.log(test + bis);
console.log( test ** bis);
console.log( test * bis);
console.log( test / bis);
console.log( bis/test);
console.log( test % bis);

// Comparaison
var test = 143;
var bis = 219;
console.log (test < bis);
console.log(bis > test);
console.log(bis === test);
console.log(test !== bis);

// condition
var limit= 50;
var score= 64;
if ( score > limit){
    console.log("ok good");
} else{
    console.log("oh noo");
}

//condition2
var password ="azerty";
if (password.length> 5);
{
    console.log("the password is secure");
}
// condition3
if(password.length>5 && score>limit )
 {
    console.log ("something is good");
} else if (password.length>5 ||score>limit)
{
    console.log(" something is good");
}else {
    console.log("nothing");
}
// Bonus
var random=Math.floor(Math.random()*(6-1 +1) +1);
console.log(random);
if (random===6)
{ console.log("yes i win");

}else {
    console.log("so close");
}

//bonus2
var month="january"
switch (month) {
    case "decembre":
    case "janvier":
    case "fevrier":

        console.log ("Winter")
       break;
    case "mars":
    case "avril":
    case "mai":      
        console.log("Spring")
        break;
    case "juin":
    case "juillet":
    case "aout": 
        console.log ("Summer")

    default:
        console.log("Fall")
        break;
}