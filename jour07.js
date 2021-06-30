// exo 1

var fs = require ("fs");

console.log("C'est parti pour la recherche :");

fs.stat("jour07.txt", function (err, stats) {
   if (err) {
       return console.error(err);
   }

   console.log(stats);
   console.log("Et voilà ! Voyons le résultat");
   
	 if (stats.isFile()) { 
		 console.log("C'est un fichier !");
	 }

	 if (stats.isDirectory()) { 
		 console.log("C'est un dossier !");
	 }  
});

// exo2
var tableau = [1, 2, 3, 4, 5];

var doubles = tableau.map(function(num) {
  return num * 2;
});

console.log(doubles);

//Exo3

var longNames =[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
var shortNames = people.filter(function(person) {
    return (person.firstName ) 
  });

// Exo4
var  array= [1, "toto", 34, "javascript", 8]

  

