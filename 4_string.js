// String  

// string does not mutate original string

let firstName = "Robin";
let lastName = "kumar";
console.log(firstName,lastName); // print space automatically btw variables.


// string concatination

// method 1 using + operator
let fullName = firstName + lastName;
console.log(fullName);

// method 2 using template literals
let fNmae = `My full name is ${firstName} ${lastName}`;
console.log(fNmae);


// Getting string character
console.log(firstName[2]);


// String methods

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());
console.log(firstName.indexOf("b")); // return -1 of any character is not present

// trim() method
let hobbies = "    coding reading writing    ";
console.log(hobbies);

let result = hobbies.trim();
console.log(result);

// indexOf
console.log(result.indexOf("reading"));

// lastindexOf
console.log(result.lastIndexOf("reading")); // last occurance of hte character & case sensitive


// include method
console.log(hobbies.includes("reading")); // return true or false 


// slice() method

let n = "helloEveryone";
console.log(n.slice(0,5)); // Excluding last one 0-4


// split() method

let favColor = "Brown red yellow blue";
let arrColor = favColor.split(" "); // convert string into array
console.log(arrColor);
