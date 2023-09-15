// Call and apply method
"use strict"
let mainPlane = {
    airline : "Fly India",
    code : "F1",
    booking:[],
    book : function(flightNum, name) {
        console.log(`${name} booked flight on ${this.airline} with the flight number ${this.code} ${flightNum}`);
        this.booking.push({flight: `${this.airline}`, name:name, flightNum: `${this.code}`});
    }
}

mainPlane.book(4532, "Robin")
console.log(mainPlane);

let childPlane = {
    airline : "Vistara",
    code : "CP7",
    booking : [],
}

// book method
let book = mainPlane.book;
book.call(childPlane, 5677, "Raj");

// apply method
book.apply(childPlane, [6678, "Amit"]);


// bind method
function greet() {
    console.log(`Welcome ${this.firstName} ${this.lastName}`);
}

let user = {
    firstName : "Raj",
    lastName : "Kiran"
}
let greets = greet.bind(user);
greets();