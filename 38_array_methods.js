let letters = ["s", "d", "s", "f", "d", "c", "b"];

// reverse method
let reverse = letters.reverse();
console.log(reverse);

// concat method
let nums = [1, 2, 3, 4];
let concated = nums.concat(letters);
console.log(concated);

// slice method
let num = [3, 4, 5, 6];
let extracted = num.slice(1, 4);
console.log(extracted);

// splice method ( mutating method)
// used to add new elements into the Array
// return deleted items in the form of array
let new1 = num.splice(0, 2, 4); // splice(index , deletedValue , valueToBeAdded , valueToBeAdded1 , ------ )
console.log(new1); // returns deleted value
console.log(num);

// at method

console.log(nums[0]);
// or
console.log(nums.at(2));

// getting the last element
console.log(nums.at(-1));

// map Methods
// creates new array from original array by applying transformation
let salaries = [3000, 4000, 5000, 45000, 6000];
let newSalaries = salaries.map((salary) => {
  let incrementedAmount = salary / 2;
  return salary + incrementedAmount;
});
console.log("after 50% bonus main salaries are", newSalaries);

// filter method
let gifts = ["watch", "ring", "chocolates", "teddy", "ring"];
let filteredArray = gifts.filter((gift) => {
  if (gift == "watch" || gift == "ring") {
    return gift;
  }
});
console.log(filteredArray);

//reduce method
let numss = [2, 3, 4, 5, 66, 7];
let sum = numss.reduce(function (total, currentValue) {
  return total + currentValue;
});
console.log(numss);

// find method ( returns the first element)

let students = [
  { name: "ra1j", id: 12 },
  { name: "r223aj", id: 11 },
  { name: "rdfdaj", id: 14 },
  { name: "raj", id: 1 },
  { name: "rdfdaj", id: 13 },
];
let result = students.find((student) => {
  return student.id === 11;
});
console.log(result);

// findIndex method ( returns the index )
let indexx = students.findIndex((student) => {
  return student.name == "ra1jgg";
});
console.log(indexx);

// some method

let sumss = students.some((student) => {
  return student.id === 12;
});
console.log(sumss);

// every method
let sums = students.every((student) => {
  return student.id === 12;
});
console.log(sums);

// flat method

let arr = [1, 2, 3, 4, 5, [3, 4, [34, 5, 4, 4, 4], 5, 5]];
let newArr = arr.flat(); // by default 1(depth value)
console.log(newArr);

// flatMap
let cart = [
  {
    name: "mobile",
    price: 500,
  },
  {
    name: "tablet",
    price: 5000,
  },
];
let newCart = cart.flatMap((item) => {
  if (item.name === "mobile") {
    return [
      item,
      {
        name: "screen",
        price: 34,
      },
    ];
  } else {
    return [item];
  }
});
console.log(newCart);

// sorting of array

let letter = ["d", "e", "t"];
console.log(letter.sort());

let nms = [2, 5, 7, -1, -22, -43];
console.log("Unsorted", nms);

// if a-b < 0 => a < b => A,B (keep order same)
// if a-b > 0 => a > b => B,A (switch the order)

nms.sort((a, b) => {
  if (a < b) {
    return -1; // Any number less then 0
  }
  if (a > b) {
    return 1; // Any number greater then 0
  }
});
console.log("Sorted", nms);
