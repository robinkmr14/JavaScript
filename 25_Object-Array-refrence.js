// Object / array how refrence are passed to variable

let arr = [1,2,3,4,5,];
let getRef = arr;

getRef.shift(); // remove the first element

console.log("Original array", arr); // also change
console.log("getRef array", getRef);


// pass by value using spread operator

let getValue = [...arr];

getValue[5] = 8;

console.log("Original array", arr); // No change
console.log("getValue array", getValue);
