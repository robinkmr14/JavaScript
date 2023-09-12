// Arrays

let dishes = ["Briyani", "murgmusalan", "kaabab", "Handichicken"];

// Access array element
console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);
console.log(dishes[3]);

// Modify the array

dishes[0] = "kadahiMotton";
console.log(dishes);

// join method 
console.log(dishes.join(' '));

// indexOf

console.log(dishes.indexOf("kaabab"));


// concat method

let newDishes = ["pani-puri", "rashmali", "kaju-katli"];
console.log(dishes.concat(newDishes));


// length method
console.log(dishes.length);


// push() method
console.log(newDishes.push("kala-Jamul")); // return new length of the array.


// pop() method

console.log(newDishes.pop());