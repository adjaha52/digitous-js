// exo 1
function calculate (entier1, entier2, operateur){
    if ( operateur === "+") {
        console.log( entier1, "+",entier2, "=", entier1 + entier2);
    }
        if( operateur ==="-"){
            console.log( entier1, "-",entier2, "=", entier1 - entier2);

        }
        if(operateur ==="/"){
            console.log( entier1, "/",entier2, "=", entier1 / entier2);
            
        }    
        if (operateur ==="%"){
            console.log( entier1, "%",entier2, "=", entier1 % entier2);
        } 
    else {
        console.log("rien à signaler");
    }        
}
var entier1 = 4;
var entier2 = 3;
var operateur= +
calculate (entier1, entier2, "operateur");

// exo2 
function multiply ( num){
    for (var i=0; i<=10; i++) {
        console.log( i, "x",num, "=", i*num);
    }
    
}
var num=8
multiply (num)

