
console.log(1);
console.log(2);
console.log(3);

// Async code 
setTimeout(() => {
    console.log("Call back function called after 3 seconds");
}, 5000);

console.log(4);
console.log(5);
console.log(6); 