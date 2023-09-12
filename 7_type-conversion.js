// Type conversion
let stringType = "45";
console.log(stringType, typeof(stringType));

// 1. Number method
// passing string must be numeric value
let numberType = Number(stringType);
console.log(numberType, typeof(numberType));


// string method
let numType = 54;
let strType = String(numType); //
console.log(strType, typeof(strType));


// boolean method true/false
let age = "32";  // Empty string always print false
let booleanType = Boolean(age);
console.log("Boolean value of age is :",booleanType); 