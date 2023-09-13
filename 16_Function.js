// Function 

// declaration
function nameOfFunction(){
    console.log("Running a function");
}

// function call
nameOfFunction();


// function Expressions
let fun = function() {    // Anynumous function
    console.log("Expressions of functon");
}
fun();



// passing values and parameter
let invitation = function (name = "defaultName") {
    console.log(`welcome! ${name}`);
}
invitation("raj");
invitation();


// returning values 
let ageCalculation = function (birthyear, currentyear=2023) {
    let age = currentyear - birthyear;
    return age;
}
console.log(ageCalculation(2000, 2023));



// Arrow Function (fat arrow function)
let invite = name => `welcome ${name}`;
console.log(invite("robin")); 


// Passing function as an argument(Higher order function Example)
let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transform = function(str, fun) {
    return fun(str);
}
console.log(transform("robin", upperCase));


// function returning another function
let compliment = function(msg) {
    return function(name){
        console.log(`${msg} ${name}`);
    }
}
console.log(compliment("You are good coder")("Robin"));


let complimented = compliment("You are good coder");
complimented("Robin kumar");


// Immediately invoked function expression 
// Executed only once
(function () {
    console.log("This function will never execute again");
})()

// or
// (function(name){
//     console.log("This function will never execute again",name);
// })("robin")