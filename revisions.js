 //alphabet

function sortLetters (mot) {

    console.log(mot);
    var letters= mot.split("");
    console.log( letters);
    console.log (letters.sort(). join(""));
}
sortLetters ("konexio");

// xoxo
function countEach (xoxox){
    var countX=0;
    var countO=0;
    for (var i= 0; i<=xoxox.length; i++ ){
        if (xoxox[i]==="x"){
            countX=countX+1
            console.log (countX);
        }
        if (xoxox[i]==="o"){
            countO=countO +1
            console.log(countO);    
        }

    }
}
countEach("xoxo")

// Palindrome
function chekpal( str) {
    var len= Math.floor(str.length/2);
    for (i=0;i<len;i++) {
        if (str[i] === str[str.long-i-1]) {
        console.log ("c'est un palindrome")        
        }
    
            else {
            console.log ("nope")   
            }
    }            
}
chekpal("racecar")

//swap






