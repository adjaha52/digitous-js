// Array 
var fruits=["mango", "lemon","blueberry"];
console.log(fruits);
console.table(fruits);

// Access
var ingredients=["eggs", "mikl","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//Add and Remove
var objects=["pen","book","lamp"];
objects.unshift("chair");// Rajoute un element au debut
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop"); // rajoute un element à la fin
console.log(objects);
objects.shift();
console.log(objects);

// Order
var numbers=[4,10,8,12,6];
numbers.reverse();
console.log(numbers);
numbers.sort( (a,b) => a-b);
console.log(numbers);

//boucle
var total=0;
var limit=10.
for (var i= 0; i<=limit; i=i++) {
    total=total + i   
     console.log(total)
}




