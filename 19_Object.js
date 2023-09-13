// Objects

let car = {
    color: "red",
    model: "2022",
    company: "Honda"
}
console.log(car);

// Accessing the js object properties
console.log(car["color"]);
console.log(car.model);

let propertieName = "color";
console.log(car[propertieName]);
console.log(car.color); // use direct property name


// Modify the object property
car["color"] = "blue";
car.model = 2024;
console.log(car);

// Delete properties of object
// always returns true
let obj = {
    prop1: "value1",
    prop2: "value2"
}

delete obj.prop1;
delete obj["prop2"];
console.log(obj);


// Function Vs method
// method --> function in object as property
