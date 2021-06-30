// Pojet
var grid = [
	["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
//console.log(grid)
var rover={
    direction:["N", "S", "E", "w"],
    x: 0,
    y: 0,
}
 
function turnRight(rover) {
    if (rover.direction === "N") {
        console.log("E");
    } else if (rover.direction === "E"){
        console.log("S");
    } else if (rover.direction === "S") {
        console.log ("w");
    } else if (rover.direction === "w") {
        console.log("N");
    }
}
turnRight("N");
function turnLeft(rover) {
    if (rover.direction === "N") {
        console.log("W");
    } else if (rover.direction === "W"){
        console.log("S");
    } else if (rover.direction === "S") {
        console.log ("E");
    } else if (rover.direction === "E") {
        console.log("N");
    }
}
function moveForward (rover) {
    if (rover.x < 9) {
        rover.x= rover.x +1
        console.log(rover.x)
    } else if(rover.x===9) {
        rover.x= rover.x
        console.log(rover.x)
    }
}

moveForward (rover.x =0 )